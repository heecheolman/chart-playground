import AxisLabel, { AxisLabelOption } from './axis-label';
import AxisLine, { AxisLineOption } from './axis-line';
import AxisTick, { AxisTickOption } from './axis-tick';
import SplitLine, { SplitLineOption } from './split-line';
import ChartOption from './chart-option';

export interface YAxisOption {
  type: 'category' | 'value';
  data: string[];
  show: boolean;
  boundaryGap: boolean;
  offset: number;
  splitNumber: number;

  axisLine?: AxisLineOption;
  axisLabel?: AxisLabelOption;
  axisTick?: AxisTickOption;
  splitLine?: SplitLineOption;
}

class YAxis extends ChartOption<YAxisOption> {
  private readonly axisLine: AxisLine = new AxisLine();
  private readonly axisLabel: AxisLabel = new AxisLabel();
  private readonly axisTick: AxisTick = new AxisTick();
  private readonly splitLine: SplitLine = new SplitLine();

  constructor(option: Partial<YAxisOption> = {
    type: 'value',
    data:  undefined,
    show: true,
    offset: 0,
    splitNumber: 5,
    boundaryGap: false,
  }) {
    super(option);
    this.axisTick.setOption({
      length: 5,
    });
    this.splitLine.setOption({
      show: true,
      interval: 0,
    });
    super.setOption({
      axisLine: this.axisLine.getOption(),
      axisLabel: this.axisLabel.getOption(),
      axisTick: this.axisTick.getOption(),
      splitLine: this.splitLine.getOption(),
    });
  }

  getAxisLine(): AxisLine {
    return this.axisLine;
  }
  getAxisLabel(): AxisLabel {
    return this.axisLabel;
  }
  getAxisTick(): AxisTick {
    return this.axisTick;
  }
  getSplitLine(): SplitLine {
    return this.splitLine;
  }
}

export default YAxis;
