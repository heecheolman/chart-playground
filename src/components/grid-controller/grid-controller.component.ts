import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Grid, { GridOption } from '../../libs/chart/grid';

@Component({
  selector: 'app-grid-controller',
  templateUrl: './grid-controller.component.html'
})
export class GridControllerComponent extends Grid implements OnInit {
  @Input() controlOption: Partial<GridOption>;
  @Output() build: EventEmitter<GridOption> = new EventEmitter<GridOption>();

  constructor() {
    super();
  }

  ngOnInit(): void {
    super.setOption(this.controlOption);
    this.onCreate();
  }

  onChangeOption(changed: Partial<GridOption>): void {
    super.setOption({
      ...changed,
    });
    this.onCreate();
  }

  onCreate(): void {
    const option = super.getOption();
    this.controlOption = option;
    this.build.emit(option);
    console.log('(GridOption) ->', option);
  }
}
