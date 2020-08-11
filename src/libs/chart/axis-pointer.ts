import ChartOption from './chart-option';

export interface AxisPointerOption {
  type: 'line' | 'shadow' | 'none' | 'cross';
  lineStyle: {
    color?: string;
    width?: number;
    type?: 'solid' | 'dashed' | 'dotted';
    opacity?: number;
  };
  shadowStyle: {
    color?: string;
    shadowBlur?: number;
    opacity?: number;
  };
}

export class AxisPointer extends ChartOption<AxisPointerOption> {
  constructor(option: Partial<AxisPointerOption> = {
    type: 'shadow',
    lineStyle: {
      type: 'solid',
      width: 1,
      color: '#555555',
      opacity: 0.5
    },
    shadowStyle: {
      color: '#000000',
      shadowBlur: 0,
      opacity: 0.1,
    },
  }) {
    super(option);
  }

  setOption(option: Partial<AxisPointerOption>): void {
    super.setOption({
      ...this.option,
      ...option,
      lineStyle: {
        ...option.lineStyle,
      },
      shadowStyle: {
        ...option.shadowStyle,
      },
    });
  }
}

export default AxisPointer;
