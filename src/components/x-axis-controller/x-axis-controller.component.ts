import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AxisLabelOption } from '../../libs/chart/axis-label';
import { AxisLineOption } from '../../libs/chart/axis-line';
import XAxis, { XAxisOption } from '../../libs/chart/x-axis';

@Component({
  selector: 'app-x-axis-controller',
  templateUrl: 'x-axis-controller.component.html',
})
export class XAxisControllerComponent extends XAxis implements OnInit {
  @Input() controlOption: Partial<XAxisOption>;
  @Output() build: EventEmitter<XAxisOption> = new EventEmitter<XAxisOption>();

  constructor() {
    super();
  }

  ngOnInit(): void {
    super.setOption(this.controlOption);
    this.onCreate();
  }

  onChangeOption(changed: Partial<XAxisOption>): void {
    super.setOption({
      ...changed,
    });
    this.onCreate();
  }

  onChangeAxisLineOption(changed: Partial<AxisLineOption>): void {
    super.getAxisLine().setOption({
      ...changed,
    });
    this.onCreate();
  }

  onChangeAxisLabelOption(changed: Partial<AxisLabelOption>): void {
    super.getAxisLabel().setOption({
      ...changed,
    });
    this.onCreate();
  }

  onCreate(): void {
    const option = super.getOption();
    this.controlOption = option;
    this.build.emit(option);
    console.log('(XAxisOption) ->', option);
  }
}
