import ChartOption from './option';

export interface GridOption {
  show: boolean;
  width: string;
  height: string;
  containLabel: boolean;
}

export class Grid extends ChartOption<GridOption> {
  constructor(option: GridOption = {
    show: false,
    width: 'auto',
    height: 'auto',
    containLabel: false,
  }) {
    super(option);
  }
}

export default Grid;
