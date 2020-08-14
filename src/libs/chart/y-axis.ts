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
    data:  [],
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

export default YAxis;
