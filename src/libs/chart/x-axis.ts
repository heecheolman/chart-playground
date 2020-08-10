import AxisLabel, { AxisLabelOption } from './axis-label';
import AxisLine, { AxisLineOption } from './axis-line';
import ChartOption from './option';

export interface XAxisOption {
  type: 'category' | 'value';
  data: string[];
  show: boolean;
  boundaryGap: boolean;
  offset: number;
  axisLine?: AxisLineOption;
  axisLabel?: AxisLabelOption;
  axisTick: {
    show: boolean;
    alignWithLabel: boolean;
    length: number;
    lineStyle: {
      color: string;
    };
  };
  splitLine: {
    show: boolean;
    interval: number;
    lineStyle: {
      color: string;
    };
  };
}

class XAxis extends ChartOption<XAxisOption> {
  private readonly axisLine: AxisLine;
  private readonly axisLabel: AxisLabel;

  constructor(option: XAxisOption = {
    type: 'category',
    data:  [],
    show: true,
    offset: 8,
    boundaryGap: true,
    axisTick: {
      show: true,
      alignWithLabel: true,
      length: 8,
      lineStyle: {
        color: '#6b6b6b',
      },
    },
    splitLine: {
      show: false,
      interval: undefined,
      lineStyle: {
        color: '#e3e3e3',
      }
    }
  }) {
    super(option);
    this.axisLine = new AxisLine();
    this.axisLabel = new AxisLabel();
  }

  getAxisLine(): AxisLine {
    return this.axisLine;
  }
  getAxisLabel(): AxisLabel {
    return this.axisLabel;
  }
}

export default XAxis;
