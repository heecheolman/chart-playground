import ChartOption from './chart-option';

export interface AxisLabelOption {
  show: boolean;
  color: string;
  fontSize: number;
  margin: number;
  interval: number | 'auto';
  showMinLabel: boolean;
  showMaxLabel: boolean;
  formatter: (value: string, index: number) => string | null;
}

class AxisLabel extends ChartOption<AxisLabelOption> {
  constructor(option: Partial<AxisLabelOption> = {
    show: true,
    color: '#6b6b6b',
    fontSize: 12,
    margin: 8,
    interval: 'auto',
    showMinLabel: null,
    showMaxLabel: null,
    formatter: null,
  }) {
    super(option);
  }
}

export default AxisLabel;
