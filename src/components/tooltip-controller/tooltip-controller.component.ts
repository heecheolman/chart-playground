import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AxisPointerOption } from '../../libs/chart/axis-pointer';
import Tooltip, { TooltipOption } from '../../libs/chart/tooltip';

@Component({
  selector: 'app-tooltip-controller',
  templateUrl: './tooltip-controller.component.html',
  styleUrls: ['./tooltip-controller.component.scss']
})
export class TooltipControllerComponent extends Tooltip implements OnInit {
  @Input() controlOption: TooltipOption;
  @Output() build: EventEmitter<TooltipOption> = new EventEmitter<TooltipOption>();

  constructor() {
    super();
  }

  ngOnInit(): void {
    super.setOption(this.controlOption);
    this.onCreate();
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
