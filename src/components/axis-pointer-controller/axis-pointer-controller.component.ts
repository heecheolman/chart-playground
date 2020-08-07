import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-axis-pointer-controller',
  templateUrl: './axis-pointer-controller.component.html',
})
export class AxisPointerControllerComponent {
  @Output() build: EventEmitter<any> = new EventEmitter<any>();
  show = true;
  type: 'line' | 'shadow' | 'none' = 'line';

  onChangeAxisPointerShow(show: boolean): void {
    this.show = show;
    this.onCreate();
  }
  onChangeAxisPointerType(type): void {
    this.type = type;
    this.onCreate();
  }

  createOption(): any {
    return {
      show: this.show,
      type: this.type,
    };
  }

  onCreate(): void {
    const option = this.createOption();
    console.log('@@AxisPointer@@=>', option);
    this.build.emit(this.createOption());
  }
}
