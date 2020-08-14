import ChartOption from '../chart-option';
import { SeriesOption } from './series.types';

class Series extends ChartOption<SeriesOption[]>{
  constructor(series: SeriesOption[] = []) {
    super(series);
  }

  setOption(option: Partial<SeriesOption[]> = []): void {
    this.option = [
      ...option,
    ];
  }

  getOption(): SeriesOption[] {
    return [...this.option];
  }
}

export default Series;
