import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ReporteRoutingModule } from './reporte-routing.module'
import { IndexReportePageComponent } from './pages/index-reporte-page/index-reporte-page.component'
import { MapComponent } from './components/map/map.component'
import { MapReportePageComponent } from './pages/map-reporte-page/map-reporte-page.component'
import { ListReporteComponent } from './components/list-reporte/list-reporte.component'
import { SharedModule } from '../../shared/shared.module'
import { UpdateReporteComponent } from './components/dialog/update-reporte/update-reporte.component'

@NgModule({
    declarations: [
        IndexReportePageComponent,
        MapComponent,
        MapReportePageComponent,
        ListReporteComponent,
        UpdateReporteComponent,
    ],
    imports: [CommonModule, ReporteRoutingModule, SharedModule],
})
export class ReporteModule {}
