import ChartOption from './option';

export interface AxisLabelOption {
  show: boolean;
  color: string;
  fontSize: number;
  margin: number;
}

class AxisLabel extends ChartOption<AxisLabelOption> {
  constructor(option: AxisLabelOption = {
    show: true,
    color: '#6b6b6b',
    fontSize: 12,
    margin: 8,
  }) {
    super(option);
  }
}

export default AxisLabel;
