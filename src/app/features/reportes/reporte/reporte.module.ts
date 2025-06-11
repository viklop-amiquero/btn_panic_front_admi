import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReporteRoutingModule } from './reporte-routing.module';
import { IndexReportePageComponent } from './pages/index-reporte-page/index-reporte-page.component';


@NgModule({
  declarations: [
    IndexReportePageComponent
  ],
  imports: [
    CommonModule,
    ReporteRoutingModule
  ]
})
export class ReporteModule { }
