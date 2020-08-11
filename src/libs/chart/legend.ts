import ChartOption from './chart-option';

export interface LegendOption {
  show: boolean;
  orient: 'horizontal' | 'vertical';
  align: 'auto' | 'left' | 'right';
  width: string;
  height: string;
  top: string;
  right: string;
  bottom: string;
  left: string | 'left' | 'center' | 'right';
  itemGap: number;
  itemWidth: number;
  itemHeight: number;
  icon: 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow' | 'none' | string;
  inactiveColor: string;
  textStyle: {
    color?: string;
    fontWeight?: 'lighter' | 'normal' | 'bold' | 'bolder';
    fontStyle?: 'normal' | 'italic' | 'oblique';
    fontSize?: number;
    align?: 'center' | 'left' | 'right';
  };
}

export class Legend extends ChartOption<LegendOption> {
  constructor(option: Partial<LegendOption> = {
    show: true,
    orient: 'horizontal',
    align: 'auto',
    width: 'auto',
    height: 'auto',
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'center',
    itemGap: 10,
    itemWidth: 25,
    itemHeight: 14,
    icon: 'roundRect',
    inactiveColor: '#ccc',
    textStyle: {
      color: '#6b6b6b',
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontSize: 12,
      align: 'center'
    }
  }) {
    super(option);
  }
}

export default Legend;
