import ChartOption from '../chart-option';

export interface ISeriesLineStyleOption {
  color: string;
  width: number;
  type: 'solid' | 'dotted' | 'dashed';
  opacity: number;
}

class SeriesLineStyle extends ChartOption<ISeriesLineStyleOption>{
  constructor(option: Partial<ISeriesLineStyleOption> = {
    type: 'solid',
    color: null,
    width: 2,
    opacity: 1,
  }) {
    super(option);
  }
}

export default SeriesLineStyle;
