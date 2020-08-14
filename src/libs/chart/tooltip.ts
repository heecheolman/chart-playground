import AxisPointer, { AxisPointerOption } from './axis-pointer';
import ChartOption from './chart-option';

type HTMLString = string;

interface TooltipFormatParam {
  componentType: 'series';
  seriesType: string;
  seriesIndex: number;
  seriesName: string;
  name: string;
  dataIndex: number;
  data: object;
  value: number | [] | object;
  encode: object;
  dimensionNames: string[];
  dimensionIndex: number;
  color: string;
  marker: HTMLString;
  /* PIE 차트 */
  percent: number;
}

export interface TooltipOption {
  show: boolean;
  trigger: 'item' | 'axis' | 'none';
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
  padding: number;
  transitionDuration: number;
  axisPointer?: AxisPointerOption;

  formatter: (params: TooltipFormatParam[], ticket: string, callback) => string | HTMLString;
}

class Tooltip extends ChartOption<TooltipOption> {
  private readonly axisPointer: AxisPointer = new AxisPointer();

  constructor(option: Partial<TooltipOption> = {
    show: true,
    trigger: 'axis',
    transitionDuration: 0.4,
    backgroundColor: 'rgba(50,50,50,0.7)',
    borderWidth: 0,
    borderColor: '#333',
    padding: 5,
    formatter: null,
  }) {
    super(option);
    super.setOption({
      axisPointer: this.axisPointer.getOption()
    });
  }

  getAxisPointer(): AxisPointer {
    return this.axisPointer;
  }

}

export default Tooltip;
