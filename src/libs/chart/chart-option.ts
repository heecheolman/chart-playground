class ChartOption<T> {
  option: T;

  constructor(option: Partial<T>) {
    this.setOption(option);
  }

  getOption(): T {
    return {
      ...this.option,
    };
  }

  setOption(option: Partial<T>): void {
    this.option = {
      ...this.option,
      ...option,
    };
  }
}

export default ChartOption;
