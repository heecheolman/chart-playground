import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  ApexGrid,
} from 'ng-apexcharts';

class GridOptionController {
  show: boolean;
  constructor() {}

  get option(): ApexGrid {
    return {
      show: this.show,
    };
  }
}

class ChartBuilder {
  gridCtrl: GridOptionController;

  constructor() {
    this.gridCtrl = new GridOptionController();
  }
}

export default ChartBuilder;
