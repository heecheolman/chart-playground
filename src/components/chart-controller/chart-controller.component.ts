import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chart-controller',
  templateUrl: './chart-controller.component.html'
})
export class ChartControllerComponent {
  @Output() build: EventEmitter<any> = new EventEmitter<any>();
  height = 350;
  type: 'line' | 'bar' | 'area' = 'bar';
  stacked = false;

  createOption(): any {
    return {
      type: this.type,
      stacked: this.stacked,
      height: this.height,
    };
  }

  onChartTypeChange(type: 'line' | 'bar' | 'area'): void {
    this.type = type;
    this.onCreate();
  }

  onStackedChange(stacked): void {
    this.stacked = stacked;
    this.onCreate();
  }

  onCreate(): void {
    this.build.emit(this.createOption());
  }
}
