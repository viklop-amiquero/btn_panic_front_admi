import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ReporteRoutingModule } from './reporte-routing.module'
import { IndexReportePageComponent } from './pages/index-reporte-page/index-reporte-page.component'
import { MapComponent } from './components/map/map.component'
import { MapReportePageComponent } from './pages/map-reporte-page/map-reporte-page.component'
import { ListReporteComponent } from './components/list-reporte/list-reporte.component'
import { SharedModule } from '../../shared/shared.module'

@NgModule({
    declarations: [
        IndexReportePageComponent,
        MapComponent,
        MapReportePageComponent,
        ListReporteComponent,
    ],
    imports: [CommonModule, ReporteRoutingModule, SharedModule],
})
export class ReporteModule {}
