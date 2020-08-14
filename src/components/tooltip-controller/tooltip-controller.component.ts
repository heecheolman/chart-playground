import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AxisPointerOption } from '../../libs/chart/axis-pointer';
import Tooltip, { TooltipOption } from '../../libs/chart/tooltip';

@Component({
  selector: 'app-tooltip-controller',
  templateUrl: './tooltip-controller.component.html',
  styleUrls: ['./tooltip-controller.component.scss']
})
export class TooltipControllerComponent extends Tooltip implements OnInit, OnChanges {
  @Input() controlOption: Partial<TooltipOption>;
  @Output() build: EventEmitter<TooltipOption> = new EventEmitter<TooltipOption>();

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

  onChangeOption(changed: Partial<TooltipOption>): void {
    super.setOption({
      ...changed,
    });
    this.onCreate();
  }

  onChangeAxisPointerOption(changed: Partial<AxisPointerOption>): void {
    super.getAxisPointer().setOption({
      ...changed,
    });
    this.onCreate();
  }

  onCreate(): void {
    const option = super.getOption();
    this.controlOption = option;
    this.build.emit(option);
    console.log('(TooltipOption) ->', option);
  }
}
