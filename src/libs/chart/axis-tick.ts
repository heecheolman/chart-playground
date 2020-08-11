import ChartOption from './chart-option';

export interface AxisTickOption {
  show: boolean;
  alignWithLabel: boolean;
  length: number;
  lineStyle: {
    color: string;
  };
}

class AxisTick extends ChartOption<AxisTickOption> {
  constructor(option: Partial<AxisTickOption> = {
    show: true,
    alignWithLabel: true,
    length: 8,
    lineStyle: {
      color: '#6b6b6b',
    },
  }) {
    super(option);
  }

}

export default AxisTick;
