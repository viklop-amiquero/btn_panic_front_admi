import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReporteRoutingModule } from './reporte-routing.module';
import { IndexReportePageComponent } from './pages/index-reporte-page/index-reporte-page.component';
import { DetailedListReportsComponent } from './components/detailed-list-reports/detailed-list-reports.component';


@NgModule({
  declarations: [
    IndexReportePageComponent,
    DetailedListReportsComponent
  ],
  imports: [
    CommonModule,
    ReporteRoutingModule
  ]
})
export class ReporteModule { }
