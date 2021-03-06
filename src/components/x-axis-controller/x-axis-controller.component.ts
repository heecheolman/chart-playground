import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AxisLabelOption } from '../../libs/chart/axis-label';
import { AxisLineOption } from '../../libs/chart/axis-line';
import { AxisTickOption } from '../../libs/chart/axis-tick';
import { SplitLineOption } from '../../libs/chart/split-line';
import XAxis, { XAxisOption } from '../../libs/chart/x-axis';

@Component({
  selector: 'app-x-axis-controller',
  templateUrl: 'x-axis-controller.component.html',
})
export class XAxisControllerComponent extends XAxis implements OnInit, OnChanges {
  @Input() controlOption: Partial<XAxisOption>;
  @Output() build: EventEmitter<XAxisOption> = new EventEmitter<XAxisOption>();

  constructor() {
    super();
  }

  ngOnInit(): void {
    super.setOption(this.controlOption);
    this.onCreate();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const current = changes.controlOption.currentValue;
    if (current) {
      super.setOption(current);
    }
  }

  onChangeOption(changed: Partial<XAxisOption>): void {
    super.setOption({
      ...changed,
    });
    this.onCreate();
  }

  onChangeLabels(labels: string): void {
    const data = labels.split(',').map((s) => s.trim());
    super.setOption({
      data,
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

  onChangeAxisTickOption(changed: Partial<AxisTickOption>): void {
    super.getAxisTick().setOption({
      ...changed,
    });
    this.onCreate();
  }

  onChangeSplitLineOption(changed: Partial<SplitLineOption>): void {
    super.getSplitLine().setOption({
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
