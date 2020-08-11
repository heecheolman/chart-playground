import ChartOption from './chart-option';

export interface SplitLineOption {
  show: boolean;
  interval: number;
  lineStyle: {
    color: string;
  };
}

class SplitLine extends ChartOption<SplitLineOption> {
  constructor(option: Partial<SplitLineOption> = {
    show: false,
    interval: undefined,
    lineStyle: {
      color: '#e3e3e3',
    }
  }) {
    super(option);
  }
}

export default SplitLine;
