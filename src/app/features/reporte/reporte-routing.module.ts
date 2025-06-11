import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { IndexReportePageComponent } from './pages/index-reporte-page/index-reporte-page.component'
import { permisionGuard } from '../core/guards/permission/permision.guard'
import { MapReportePageComponent } from './pages/map-reporte-page/map-reporte-page.component'
import { RoutesName as rn } from '../../shared/routes/routes'
import { DetailedReportListComponent } from './components/detailed-report-list/detailed-report-list.component'

const routes: Routes = [
    {
        // path: rn.REPORTE.mapa.route,
        path: '',
        component: IndexReportePageComponent,
    },
    {
        // path: rn.REPORTE.detalle.route,
        path: rn.REPORTE.mapa.route,
        component: MapReportePageComponent,
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ReporteRoutingModule {}
