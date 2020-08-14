import { Component, OnInit } from '@angular/core';
import Grid, { GridOption } from '../libs/chart/grid';
import Legend, { LegendOption } from '../libs/chart/legend';
import Series from '../libs/chart/series/series';
import SeriesFactory from '../libs/chart/series/series-factory';
import { SeriesOption, SeriesType } from '../libs/chart/series/series.types';
import Tooltip, { TooltipOption } from '../libs/chart/tooltip';
import XAxis, { XAxisOption } from '../libs/chart/x-axis';
import YAxis, { YAxisOption } from '../libs/chart/y-axis';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  inputOption;
  option;
  options = [];

  gridOption: Partial<GridOption>;
  tooltipOption: Partial<TooltipOption>;
  xAxisOption: Partial<XAxisOption>;
  yAxisOption: Partial<YAxisOption>;
  legendOption: Partial<LegendOption>;
  seriesOption: SeriesOption[];

  ngOnInit(): void {
    // this.createOption();
    this.createManually();
  }

  createManually(): void {
    const grid = new Grid();
    const legend = new Legend();
    const tooltip = new Tooltip();
    // tooltip.setOption({
      // formatter(params, ticket, cb): string {
      //   console.log(params, ticket, cb);
      //   return params.map((param) => {
      //     return `<div>${param.marker}</div>`;
      //   }).join('');
      // },
    // });
    const xAxis = new XAxis({
      data: ['A', 'B', 'C', 'D']
    });
    xAxis.setAxisLabel({
      formatter(value: string): string {
        return value;
      }
    });
    const yAxis = new YAxis();
    yAxis.setAxisLabel({
      formatter(value: string): string {
        return value + '원';
      }
    });
    const series = new Series([
      SeriesFactory.createSeries(SeriesType.LINE, {
        name: 'A',
        stack: 'ee',
        data: [300, 100, 200, 600],
        smooth: true,
        symbolSize: 10,
        color: '#f95656',
      }).getOption(),
      SeriesFactory.createSeries(SeriesType.LINE, {
        name: 'B',
        stack: 'e',
        data: [100, 200, 700, 800],
        color: '#6e84ff',
        symbolSize: 10,
        smooth: true,
      }).getOption(),
    ]);

    this.gridOption = grid.getOption();
    this.tooltipOption = tooltip.getOption();
    this.legendOption = legend.getOption();
    this.xAxisOption = xAxis.getOption();
    this.yAxisOption = yAxis.getOption();
    this.seriesOption = series.getOption();

    this.option = {
      grid,
      legend,
      tooltip,
      xAxis,
      yAxis,
      series,
    };
  }

  onGridOptionBuild(option: any): void {
    this.option = {
      ...this.option,
      grid: {
        ...option,
      }
    };
  }

  onXAxisOptionBuild(option: any): void {
    this.option = {
      ...this.option,
      xAxis: {
        ...this.option.xAxis,
        ...option,
      },
    };
  }

  onYAxisOptionBuild(option: any): void {
    this.option = {
      ...this.option,
      yAxis: {
        ...this.option.yAxis,
        ...option,
      },
    };
  }

  onSeriesOptionBuild(series): void {
    this.option = {
      ...this.option,
      series,
    };
  }

  onAxisPointerOptionBuilder(option: any): void {
    this.option = {
      ...this.option,
      axisPointer: {
        ...option,
      },
    };
  }

  onApplyOption(): void {
    const option = JSON.parse(this.inputOption);
    console.log('inputOption', option);
    const {
      grid,
      tooltip,
      legend,
      xAxis,
      yAxis,
      series,
    } = option;

    this.gridOption = grid;
    this.tooltipOption = tooltip;
    this.legendOption = legend;
    this.xAxisOption = xAxis;
    this.yAxisOption = yAxis;
    this.seriesOption = series;
    this.createOption();
  }

  onTooltipOptionBuild(option: any): void {
    this.option = {
      ...this.option,
      tooltip: {
        ...option,
      }
    };
  }

  onLegendOptionBuild(option: any): void {
    this.option = {
      ...this.option,
      legend: {
        ...option,
      }
    };
  }

  createOption(): void {
    this.option = {
      grid: this.gridOption,
      legend: this.legendOption,
      tooltip: this.tooltipOption,
      xAxis: this.xAxisOption,
      yAxis: this.yAxisOption,
      series: this.seriesOption,
    };
  }

  onCreateOption(): void {
    const option = this.option;
    this.options.push(option);
  }
}
