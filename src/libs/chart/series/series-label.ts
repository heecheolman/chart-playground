import ChartOption from '../chart-option';

type LabelPositionType =
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'inside'
  | 'insideLeft'
  | 'insideRight'
  | 'insideTop'
  | 'insideBottom'
  | 'insideTopLeft'
  | 'insideBottomLeft'
  | 'insideTopRight'
  | 'insideBottomRight'
  | [number, number]
  | [string, string]
  ;

export interface ISeriesLabelOption {
  show: boolean;
  fontSize: number;
  color: string;
  fontWeight: 'normal' | 'bold' | 'bolder' | 'lighter';
  position: LabelPositionType;
  distance: number;
  rotate: number;
  formatter: (params: any) => string;
}

class SeriesLabel extends ChartOption<ISeriesLabelOption> {
  constructor(option: Partial<ISeriesLabelOption> = {
    show: false,
  }) {
    super(option);
  }
}

export default SeriesLabel;
