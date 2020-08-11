import AxisLabel, { AxisLabelOption } from './axis-label';
import AxisLine, { AxisLineOption } from './axis-line';
import AxisTick, { AxisTickOption } from './axis-tick';
import ChartOption from './chart-option';
import SplitLine, { SplitLineOption } from './split-line';

export interface XAxisOption {
  type: 'category' | 'value';
  data: string[];
  show: boolean;
  boundaryGap: boolean;
  offset: number;
  axisLine?: AxisLineOption;
  axisLabel?: AxisLabelOption;
  axisTick?: AxisTickOption;
  splitLine?: SplitLineOption;
}

class XAxis extends ChartOption<XAxisOption> {
  private readonly axisLine: AxisLine = new AxisLine();
  private readonly axisLabel: AxisLabel = new AxisLabel();
  private readonly axisTick: AxisTick = new AxisTick();
  private readonly splitLine: SplitLine = new SplitLine();

  constructor(option: Partial<XAxisOption> = {
    type: 'category',
    data:  [],
    show: true,
    offset: 8,
    boundaryGap: true,
  }) {
    super(option);
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

export default XAxis;
