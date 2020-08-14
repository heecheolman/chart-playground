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
  setAxisLine(option: Partial<AxisLineOption>): void {
    this.axisLine.setOption(option);
    super.setOption({
      axisLine: this.axisLine.getOption(),
    });
  }

  getAxisLabel(): AxisLabel {
    return this.axisLabel;
  }
  setAxisLabel(option: Partial<AxisLabelOption>): void {
    this.axisLabel.setOption(option);
    super.setOption({
      axisLabel: this.axisLabel.getOption(),
    });
  }

  getAxisTick(): AxisTick {
    return this.axisTick;
  }
  setAxisTick(option: Partial<AxisTickOption>): void {
    this.axisTick.setOption(option);
    super.setOption({
      axisTick: this.axisTick.getOption(),
    });
  }

  getSplitLine(): SplitLine {
    return this.splitLine;
  }
  setSplitLine(option: Partial<SplitLineOption>): void {
    this.splitLine.setOption(option);
    super.setOption({
      splitLine: this.splitLine.getOption(),
    });
  }
}

export default XAxis;
