import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import ChartOption from '../../libs/chart/chart-option';
import Series from '../../libs/chart/series/series';
import SeriesFactory from '../../libs/chart/series/series-factory';
import { SeriesOption, SeriesType } from '../../libs/chart/series/series.types';

@Component({
  selector: 'app-series-controller',
  templateUrl: './series-controller.component.html',
  styleUrls: ['./series-controller.component.scss']
})
export class SeriesControllerComponent extends Series implements OnInit, OnChanges {
  @Input() controlSeries: SeriesOption[] = [];
  @Output() build: EventEmitter<SeriesOption[]> = new EventEmitter<SeriesOption[]>();

  seriesType = 'bar';
  seriesName = 'A';
  seriesColor = '#e3e3e3';
  seriesData = '[]';
  series = [];

  constructor() {
    super();
  }

  ngOnInit(): void {
    super.setOption(this.controlSeries);
    this.onCreate();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const current = changes.controlSeries.currentValue;
    if (current) {
      this.series = current;
    }
  }

  createSeries(): void {
    let series: ChartOption<SeriesOption>;
    const option = {
      type: this.seriesType as SeriesType,
      name: this.seriesName,
      color: this.seriesColor,
      data: JSON.parse(this.seriesData),
    };
    switch (this.seriesType) {
      case 'bar':
        series = SeriesFactory.createSeries(SeriesType.BAR, option);
        break;
      case 'line':
        series = SeriesFactory.createSeries(SeriesType.LINE, option);
        break;
    }
    this.series.push(series.getOption());
    this.onCreate();
  }

  onEditSeries(series: SeriesOption, index: number): void {
    this.series = this.series.map((s, i) => {
      if (i === index) {
        return series;
      }
      return s;
    });
    this.onCreate();
  }

  onCreate(): void {
    this.build.emit(this.series);
    console.log('(Series) ->', this.series);
  }

}
