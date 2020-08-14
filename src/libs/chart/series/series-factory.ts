import ChartOption from '../chart-option';
import BarSeries from './bar-series';
import LineSeries from './line-series';
import { SeriesOption, SeriesType } from './series.types';

class SeriesFactory {
  static createSeries(type: SeriesType, option?: SeriesOption): ChartOption<SeriesOption> {
    switch (type) {
      case SeriesType.BAR:
        return new BarSeries({
          ...option,
          type: SeriesType.BAR,
        });
        // barSeries.setOption(option as BarSeriesOption);
      case SeriesType.LINE:
        return new LineSeries({
          ...option,
          type: SeriesType.LINE,
        });
    }
  }
}

export default SeriesFactory;
