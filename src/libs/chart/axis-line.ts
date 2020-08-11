import ChartOption from './chart-option';

export interface AxisLineOption {
  show: boolean;
  lineStyle: {
    color: string;
  };
}

class AxisLine extends ChartOption<AxisLineOption> {
  constructor(option: Partial<AxisLineOption> = {
    show: true,
    lineStyle: {
      color: '#e3e3e3',
    },
  }) {
    super(option);
  }

}

export default AxisLine;
