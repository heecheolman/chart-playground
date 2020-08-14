import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GridControllerComponent } from './grid-controller/grid-controller.component';
import { SeriesElementControllerComponent } from './series-controller/series-element-controller.component';
import { XAxisControllerComponent } from './x-axis-controller/x-axis-controller.component';
import { YAxisControllerComponent } from './y-axis-controller/y-axis-controller.component';
import { TooltipControllerComponent } from './tooltip-controller/tooltip-controller.component';
import { SeriesControllerComponent } from './series-controller/series-controller.component';
import { LegendControllerComponent } from './legend-controller/legend-controller.component';

const COMPONENTS = [
  GridControllerComponent,
  XAxisControllerComponent,
  YAxisControllerComponent,
  TooltipControllerComponent,
  LegendControllerComponent,
  SeriesControllerComponent,
  SeriesElementControllerComponent,
];

@NgModule({
  declarations: [...COMPONENTS, TooltipControllerComponent, SeriesControllerComponent, LegendControllerComponent],
  imports: [FormsModule, CommonModule],
  exports: [...COMPONENTS],
})
export class ComponentsModule {}
