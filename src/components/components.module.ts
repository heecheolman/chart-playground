import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AxisPointerControllerComponent } from './axis-pointer-controller/axis-pointer-controller.component';
import { ChartControllerComponent } from './chart-controller/chart-controller.component';
import { GridControllerComponent } from './grid-controller/grid-controller.component';
import { XAxisControllerComponent } from './x-axis-controller/x-axis-controller.component';
import { YAxisControllerComponent } from './y-axis-controller/y-axis-controller.component';
import { TooltipControllerComponent } from './tooltip-controller/tooltip-controller.component';
import { SeriesControllerComponent } from './series-controller/series-controller.component';

const COMPONENTS = [
  GridControllerComponent,
  ChartControllerComponent,
  XAxisControllerComponent,
  YAxisControllerComponent,
  AxisPointerControllerComponent,
  TooltipControllerComponent,
  SeriesControllerComponent,
];

@NgModule({
  declarations: [...COMPONENTS, TooltipControllerComponent, SeriesControllerComponent],
  imports: [FormsModule, CommonModule],
  exports: [...COMPONENTS],
})
export class ComponentsModule {}
