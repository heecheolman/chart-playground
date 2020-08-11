import { Component } from '@angular/core';
import { GridOption } from '../libs/chart/grid';
import { LegendOption } from '../libs/chart/legend';
import { TooltipOption } from '../libs/chart/tooltip';
import { XAxisOption } from '../libs/chart/x-axis';
import { YAxisOption } from '../libs/chart/y-axis';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  inputOption;
  option;
  options = [];

  gridOption: Partial<GridOption>;
  tooltipOption: Partial<TooltipOption>;
  xAxisOption: Partial<XAxisOption> = {
    data: ['월', '화', '수', '목', '금', '토', '일'],
  };
  yAxisOption: Partial<YAxisOption>;
  legendOption: Partial<LegendOption>;
  seriesOption;

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

  onSeriesOptionBuilder(option: any): void {
    const series = [
      {
        name: 'A',
        data: [10, 52, 200, 334, 390, 330, 220],
      },
      {
        name: 'B',
        data: [40, 22, 100, 634, 490, 310, 20],
      },
      {
        name: 'C',
        data: [310, 252, 100, 534, 30, 350, 210],
      }
    ];
    const seriesOption = series.map(s => {
      return {
        ...option,
        ...s,
      };
    });
    this.option = {
      ...this.option,
      series: seriesOption
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
    // const {
    //   grid,
    //   tooltip,
    //   xAxis,
    //   yAxis,
    //   series
    // } = this.option;
    // this.gridOption = {
    //   show: true,
    // };
    // this.tooltipOption = tooltip;
    // this.xAxisOption = xAxis;
    // this.yAxisOption = yAxis;
    // this.seriesOption = series;
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

  constructor() {
    this.createOption();
  }

  createOption(): void {
    this.option = {
      // color: ['#3398DB'],
      tooltip: this.tooltipOption,
      grid: this.gridOption,
      xAxis: this.xAxisOption,
      yAxis: this.yAxisOption,
      legend: this.legendOption,
      series: [
        {
          name: 'A',
          type: 'bar',
          color: '#ff6b93',
          // stack: 'a',
          // barWidth: '60%',
          data: [10, 52, 200, 334, 390, 330, 220],
        },
        {
          name: 'B',
          type: 'bar',
          // stack: 'a',
          color: '#ff91b0',
          data: [40, 22, 100, 634, 490, 310, 20],
        },
        {
          name: 'C',
          type: 'bar',
          // stack: 'a',
          color: '#ffb0c5',
          data: [310, 252, 100, 534, 30, 350, 210],
        },
      ],
    };
  }

  onCreateOption(): void {
    const option = this.option;
    this.options.push(option);
  }
}
