import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-series-controller',
  templateUrl: './series-controller.component.html',
  styleUrls: ['./series-controller.component.scss']
})
export class SeriesControllerComponent implements OnInit {
  @Output() build: EventEmitter<any> = new EventEmitter<any>();

  type: 'bar' | 'line' = 'bar';
  stack = false;
  barWidth = '50';
  barMinWidth = '1';
  barMaxWidth;
  barGap = '30%';
  barCategoryGap = '20%';

  ngOnInit(): void {
  }

  onChangeSeriesType(type): void {
    this.type = type;
    this.onCreate();
  }

  onChangeSeriesStack(stack: boolean): void {
    this.stack = stack;
    this.onCreate();
  }

  onChangeBarWidth(width: string): void {
    this.barWidth = width;
    this.onCreate();
  }

  onChangeBarMinWidth(minWidth: string): void {
    this.barMinWidth = minWidth;
    this.onCreate();
  }

  onChangeBarMaxWidth(maxWidth: string): void {
    this.barMaxWidth = maxWidth;
    this.onCreate();
  }

  onChangeBarGap(gap: string): void {
    this.barGap = gap;
    this.onCreate();
  }

  onChangeBarCategoryGap(gap: string): void {
    this.barCategoryGap = gap;
    this.onCreate();
  }

  createOption(): any {
    switch (this.type) {
      case 'bar':
        return {
          type: this.type,
          stack: this.stack ? 'A' : null,
          barWidth: this.barWidth,
          barMinWidth: this.barMinWidth,
          barMaxWidth: this.barMaxWidth,
          barGap: this.barGap,
          // barCategoryGap: this.barCategoryGap,
        };
        break;
      case 'line':
        return {
          type: this.type,
          stack: this.stack ? 'A' : null,
        };
        break;
    }
  }

  onCreate(): void {
    const option = this.createOption();
    console.log('@@SeriesOption@@=>', option);
    this.build.emit(this.createOption());
  }

}
