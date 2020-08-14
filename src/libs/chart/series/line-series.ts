import ChartOption from '../chart-option';
import SeriesLabel, { ISeriesLabelOption } from './series-label';
import SeriesLineStyle, { ISeriesLineStyleOption } from './series-line-style';
import { SeriesType } from './series.types';

export interface LineSeriesOption {
  type: SeriesType.LINE;
  name: string;
  data: any[];
  stack: string;
  color: string;
  smooth: boolean;
  showSymbol: boolean;
  showAllSymbol: 'auto' | boolean;
  symbol: 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow' | 'none';
  symbolSize: number;
  hoverAnimation: boolean;
  legendHoverLink: boolean;
  label?: Partial<ISeriesLabelOption>;
  lineStyle?: Partial<ISeriesLineStyleOption>;
}

class LineSeries extends ChartOption<LineSeriesOption>{
  private readonly label: SeriesLabel = new SeriesLabel();
  private readonly lineStyle: SeriesLineStyle = new SeriesLineStyle();

  constructor(option: Partial<LineSeriesOption> = {
    type: SeriesType.LINE,
    name: '',
    data: [],
    stack: '',
    color: '',
    smooth: false,
    showSymbol: true,
    showAllSymbol: 'auto',
    symbol: 'circle',
    symbolSize: 4,
    hoverAnimation: true,
    legendHoverLink: true,
  }) {
    super(option);
    super.setOption({
      label: this.label.getOption(),
      lineStyle: this.lineStyle.getOption(),
    });
  }
}

export default LineSeries;
