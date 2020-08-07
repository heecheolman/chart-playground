import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  options;

  onGridOptionBuild(option: any): void {
    this.options = {
      ...this.options,
      grid: {
        ...option,
      }
    };
  }

  onXAxisOptionBuild(option: any): void {
    this.options = {
      ...this.options,
      xAxis: {
        ...this.options.xAxis,
        ...option,
      },
    };
    console.log(this.options);
  }

  onYAxisOptionBuild(option: any): void {
    this.options = {
      ...this.options,
      yAxis: {
        ...this.options.yAxis,
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
    this.options = {
      ...this.options,
      series: seriesOption
    };
    console.log('this.options', this.options);
  }

  onAxisPointerOptionBuilder(option: any): void {
    this.options = {
      ...this.options,
      axisPointer: {
        ...option,
      },
    };
  }

  onTooltipOptionBuilder(option: any): void {
    this.options = {
      ...this.options,
      tooltip: {
        ...option,
      }
    };
  }

  constructor() {
    this.createOption();
  }

  createOption(): void {
    this.options = {
      // color: ['#3398DB'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      grid: {
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        show: true,
        data: ['월', '화', '수', '목', '금', '토', '일'],
      },
      yAxis: {
        type: 'value',
      },
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
}
