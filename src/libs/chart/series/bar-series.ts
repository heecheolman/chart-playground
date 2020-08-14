import ChartOption from '../chart-option';
import SeriesLabel, { ISeriesLabelOption } from './series-label';
import { SeriesType } from './series.types';

export interface BarSeriesOption {
  type: SeriesType.BAR;
  name: string;
  data: any[];
  stack: string;
  color: string;
  barWidth: string;
  barMinWidth: string;
  barMaxWidth: string;
  barGap: string;
  barCategoryGap: string;
  label?: Partial<ISeriesLabelOption>;
}

class BarSeries extends ChartOption<BarSeriesOption> {
  private readonly label: SeriesLabel = new SeriesLabel();

  constructor(option: Partial<BarSeriesOption> = {
    type: SeriesType.BAR,
    name: '',
    data: [],
    stack: '',
    color: '',
    barWidth: '',
    barMinWidth: '',
    barMaxWidth: '',
    barGap: '30%',
    barCategoryGap: '20%',
  }) {
    super(option);
    super.setOption({
      label: this.label.getOption(),
    });
  }
}

export default BarSeries;
