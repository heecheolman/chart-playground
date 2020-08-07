import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-grid-controller',
  templateUrl: './grid-controller.component.html'
})
export class GridControllerComponent implements OnInit {
  @Output() build: EventEmitter<any> = new EventEmitter<any>();

  show = false;
  width;
  height;
  containLabel = false;

  createOption(): any {
    return {
      show: this.show,
      containLabel: this.containLabel,
      width: this.width || 'auto',
      height: this.height || 'auto'
    };
  }

  ngOnInit(): void {
    this.onCreate();
  }

  onChangeShowGrid(show: boolean): void {
    this.show = show;
    this.onCreate();
  }

  onChangeContainLabel(containLabel: boolean): void {
    this.containLabel = containLabel;
    this.onCreate();
  }

  onChangeWidth(width: number): void {
    this.width = width;
    this.onCreate();
  }

  onChangeHeight(height: number): void {
    this.height = height;
    this.onCreate();
  }

  onCreate(): void {
    const option = this.createOption();
    console.log('@@GridOption@@=>', option);
    this.build.emit(this.createOption());
  }
}
