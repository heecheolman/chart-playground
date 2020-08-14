import { BarSeriesOption } from './bar-series';
import { LineSeriesOption } from './line-series';

export type SeriesOption = Partial<BarSeriesOption> | Partial<LineSeriesOption>;

export enum SeriesType {
  BAR = 'bar',
  LINE = 'line',
}
