import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SeriesOption, SeriesType } from '../../libs/chart/series/series.types';

@Component({
  selector: 'app-series-element-controller',
  template: `
    <div class="series-element">
      <h2>Series Element</h2>
      <div class="group-box">
        <div class="option-box">
          <div>
            <label>타입</label>
            <input type="text" placeholder="bar 혹은 line" [(ngModel)]="seriesOption.type">
          </div>
          <div>
            <label>이름</label>
            <input type="text" [(ngModel)]="seriesOption.name">
          </div>
          <div>
            <label>색상</label>
            <input type="color" [(ngModel)]="seriesOption.color">
          </div>
          <div>
            <label>데이터</label>
            <textarea type="text" [(ngModel)]="seriesData"></textarea>
          </div>
          <div>
            <label>stack</label>
            <input type="text" [(ngModel)]="seriesOption.stack">
          </div>
          <ng-container [ngSwitch]="seriesOption.type">
            <ng-container *ngSwitchCase="'bar'">
              <div>
                <label>barWidth</label>
                <input type="text" [(ngModel)]="seriesOption.barWidth">
              </div>
              <div>
                <label>barMinWidth</label>
                <input type="text" [(ngModel)]="seriesOption.barMinWidth">
              </div>
              <div>
                <label>barMaxWidth</label>
                <input type="text" [(ngModel)]="seriesOption.barMaxWidth">
              </div>
              <div>
                <label>barGap</label>
                <input type="text" [(ngModel)]="seriesOption.barGap">
              </div>
              <div>
                <label>barCategoryGap</label>
                <input type="text" [(ngModel)]="seriesOption.barCategoryGap">
              </div>
            </ng-container>
            <ng-container *ngSwitchCase="'line'">
              <div>
                <label>smooth</label>
                <input type="checkbox" [(ngModel)]="seriesOption.smooth">
              </div>
              <div>
                <label>showSymbol</label>
                <input type="checkbox" [(ngModel)]="seriesOption.showSymbol">
              </div>
              <div>
                <label>showAllSymbol</label>
                <input type="checkbox" [(ngModel)]="seriesOption.showAllSymbol">
              </div>
              <div>
                <label>symbol</label>
                <input type="text" [(ngModel)]="seriesOption.symbol">
              </div>
              <div>
                <label>symbolSize</label>
                <input type="number" [(ngModel)]="seriesOption.symbolSize">
              </div>
            </ng-container>
          </ng-container>
        </div>
        <h4>라벨</h4>
        <div class="option-box">
          <div>
            <label>라벨 표시</label>
            <input type="checkbox" [(ngModel)]="seriesOption.label.show">
          </div>
          <div>
            <label>라벨 position</label>
            <input type="text" [(ngModel)]="seriesOption.label.position">
          </div>
          <div>
            <label>라벨 color</label>
            <input type="color" [(ngModel)]="seriesOption.label.color">
          </div>
          <div>
            <label>라벨 fontSize</label>
            <input type="number" [(ngModel)]="seriesOption.label.fontSize">
          </div>
          <div>
            <label>라벨 fontWeight</label>
            <input type="string" [(ngModel)]="seriesOption.label.fontWeight">
          </div>
          <div>
            <label>라벨 distance</label>
            <input type="number" [(ngModel)]="seriesOption.label.distance">
          </div>
        </div>
      </div>
      <button (click)="onEdit()">수정</button>
    </div>
  `,
  styles: [`
    .series-element {
      padding: 10px;
      border: 1px solid #e3e3e3;
    }
  `]
})
export class SeriesElementControllerComponent implements OnInit {
  @Input() seriesOption: SeriesOption;
  @Output() edit: EventEmitter<Partial<SeriesOption>> = new EventEmitter<Partial<SeriesOption>>();
  seriesData = '[]';

  ngOnInit(): void {
    this.seriesData = JSON.stringify(this.seriesOption.data);
  }

  onEdit(): void {
    switch (this.seriesOption.type) {
      case SeriesType.BAR:
        this.edit.emit({
          ...this.seriesOption,
          data: JSON.parse(this.seriesData),
        });
        break;
      case SeriesType.LINE:
        this.edit.emit({
          ...this.seriesOption,
          data: JSON.parse(this.seriesData),
        });
        break;
    }
  }
}
