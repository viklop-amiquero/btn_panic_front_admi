import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ReporteRoutingModule } from './reporte-routing.module'
import { IndexReportePageComponent } from './pages/index-reporte-page/index-reporte-page.component'
import { DetailedListReportsComponent } from './components/detailed-list-reports/detailed-list-reports.component'
import { SharedModule } from '../../../shared/shared.module'

@NgModule({
    declarations: [IndexReportePageComponent, DetailedListReportsComponent],
    imports: [CommonModule, ReporteRoutingModule, SharedModule],
})
export class ReporteModule {}
