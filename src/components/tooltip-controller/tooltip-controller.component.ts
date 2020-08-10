import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tooltip-controller',
  templateUrl: './tooltip-controller.component.html',
  styleUrls: ['./tooltip-controller.component.scss']
})
export class TooltipControllerComponent implements OnInit {
  @Input() option;
  @Output() build: EventEmitter<any> = new EventEmitter<any>();

  show = true;
  trigger: 'item' | 'axis' | 'none' = 'axis';
  axisPointerType: 'line' | 'shadow' | 'none' | 'cross' = 'shadow';

  axisPointerLineColor = '#555';
  axisPointerLineWidth = 1;
  axisPointerLineType: 'solid' | 'dashed' | 'dotted' = 'solid';

  axisPointerShadowColor = '#000000';
  axisPointerShadowBlur = 0;
  axisPointerShadowOpacity = 0.1;

  onChangeShow(show: boolean): void {
    this.show = show;
    this.onCreate();
  }

  onChangeTrigger(trigger): void {
    this.trigger = trigger;
    this.onCreate();
  }

  onChangeAxisPointerType(axisPointerType): void {
    this.axisPointerType = axisPointerType;
    this.onCreate();
  }

  onChangeAxisPointerLineColor(color: string): void {
    this.axisPointerLineColor = color;
    this.onCreate();
  }

  onChangeAxisPointerLineWidth(width: number): void {
    this.axisPointerLineWidth = width;
    this.onCreate();
  }

  onChangeAxisPointerLineType(type): void {
    this.axisPointerLineType = type;
    this.onCreate();
  }

  onChangeAxisPointerShadowColor(color: string): void {
    this.axisPointerShadowColor = color;
    this.onCreate();
  }

  onChangeAxisPointerShadowBlur(blur: number): void {
    this.axisPointerShadowBlur = blur;
    this.onCreate();
  }

  onChangeAxisPointerShadowOpacity(opacity: number): void {
    this.axisPointerShadowOpacity = opacity;
    this.onCreate();
  }

  ngOnInit(): void {
  }

  createOption(): any {
    return {
      show: this.show,
      trigger: this.trigger,
      axisPointer: {
        type: this.axisPointerType,
        lineStyle: {
          color: this.axisPointerLineColor,
          width: this.axisPointerLineWidth,
          type: this.axisPointerLineType,
        },
        shadowStyle: {
          color: this.axisPointerShadowColor,
          shadowBlur: this.axisPointerShadowBlur,
          opacity: this.axisPointerShadowOpacity,
        }
      }
    };
  }

  onCreate(): void {
    const option = this.createOption();
    console.log('@@TooltipOption@@=>', option);
    this.build.emit(this.createOption());
  }
}
