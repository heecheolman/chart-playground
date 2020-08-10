import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-y-axis-controller',
  templateUrl: 'y-axis-controller.component.html',
})
export class YAxisControllerComponent implements OnInit {
  @Input() option;
  @Output() build: EventEmitter<any> = new EventEmitter<any>();
  show = true;
  boundaryGap = false;

  /* axisLine */
  axisLineShow = true;
  axisLineStyleColor = '#e3e3e3';

  /* axisTick */
  axisTickShow = true;
  axisTickAlignWidthLabel = true;
  axisTickLength = 5;
  axisTickLineStyleColor = '#6b6b6b';
  axisOffset = 0;

  /* axisLabel */
  axisLabelShow = true;
  axisLabelColor = '#6b6b6b';
  axisLabelFontSize = 12;
  axisLabelMargin = 8;

  /* splitLine */
  splitLineShow = true;
  splitLineInterval = 0;
  splitLineStyleColor = '#e3e3e3';

  ngOnInit(): void {
    this.onCreate();
  }

  onChangeShow(show: boolean): void {
    this.show = show;
    this.onCreate();
  }

  onChangeBoundaryGap(boundaryGap: boolean): void {
    this.boundaryGap = boundaryGap;
    this.onCreate();
  }

  onChangeAxisOffset(offset: number): void {
    this.axisOffset = offset;
    this.onCreate();
  }

  onChangeAxisTickShow(axisTickShow: boolean): void {
    this.axisTickShow = axisTickShow;
    this.onCreate();
  }

  onChangeAxisTickAlignWidthLabel(axisTickAlignWidthLabel: boolean): void {
    this.axisTickAlignWidthLabel = axisTickAlignWidthLabel;
    this.onCreate();
  }

  onChangeAxisTickLength(length: number): void {
    this.axisTickLength = length;
    this.onCreate();
  }

  onChangeAxisTickLineStyleColor(color: string): void {
    this.axisTickLineStyleColor = color;
    this.onCreate();
  }

  onChangeAxisLabelShow(show: boolean): void {
    this.axisLabelShow = show;
    this.onCreate();
  }

  onChangeAxisLabelColor(color: string): void {
    this.axisLabelColor = color;
    this.onCreate();
  }

  onChangeAxisLabelFontSize(fontSize: number): void {
    this.axisLabelFontSize = fontSize;
    this.onCreate();
  }

  onChangeAxisLabelMargin(margin: number): void {
    this.axisLabelMargin = margin;
    this.onCreate();
  }

  onChangeSplitLineShow(show: boolean): void {
    this.splitLineShow = show;
    this.onCreate();
  }

  onChangeSplitLineInterval(interval: number): void {
    this.splitLineInterval = interval;
    this.onCreate();
  }

  onChangeAxisLineShow(show: boolean): void {
    this.axisLineShow = show;
    this.onCreate();
  }

  onChangeAxisLineStyleColor(color: string): void {
    this.axisLineStyleColor = color;
    this.onCreate();
  }

  onChangeSplitLineStyleColor(color: string): void {
    this.splitLineStyleColor = color;
    this.onCreate();
  }

  createOption(): any {
    return {
      type: 'value',
      show: this.show,
      offset: this.axisOffset,
      boundaryGap: this.boundaryGap,
      axisLine: {
        show: this.axisLineShow,
        lineStyle: {
          color: this.axisLineStyleColor,
        }
      },
      axisLabel: {
        show: this.axisLabelShow,
        color: this.axisLabelColor,
        fontSize: this.axisLabelFontSize,
        margin: this.axisLabelMargin,
      },
      axisTick: {
        show: this.axisTickShow,
        alignWithLabel: this.axisTickAlignWidthLabel,
        length: this.axisTickLength,
        lineStyle: {
          color: this.axisTickLineStyleColor,
        }
      },
      splitLine: {
        show: this.splitLineShow,
        interval: this.splitLineInterval,
        lineStyle: {
          color: this.splitLineStyleColor,
        }
      },
    };
  }

  onCreate(): void {
    const option = this.createOption();
    // console.log('@@XAxisOption@@=>', option);
    this.build.emit(this.createOption());
  }
}
