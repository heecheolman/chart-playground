import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import Legend, { LegendOption } from '../../libs/chart/legend';

@Component({
  selector: 'app-legend-controller',
  templateUrl: './legend-controller.component.html',
  styleUrls: ['./legend-controller.component.scss']
})
export class LegendControllerComponent extends Legend implements OnInit, OnChanges {
  @Input() controlOption: Partial<LegendOption>;
  @Output() build: EventEmitter<LegendOption> = new EventEmitter<LegendOption>();

  constructor() {
    super();
  }

  ngOnInit(): void {
    super.setOption(this.controlOption);
    this.onCreate();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const current = changes.controlOption.currentValue;
    if (current) {
      super.setOption(current);
    }
  }

  onChangeOption(changed: Partial<LegendOption>): void {
    super.setOption({
      ...changed,
      textStyle: {
        ...super.getOption().textStyle,
        ...changed.textStyle,
      }
    });
    this.onCreate();
  }

  onCreate(): void {
    const option = super.getOption();
    this.controlOption = option;
    this.build.emit(option);
    console.log('(LegendOption) ->', option);
  }
}
