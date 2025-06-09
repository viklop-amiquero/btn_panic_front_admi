import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { IndexReportePageComponent } from './pages/index-reporte-page/index-reporte-page.component'
import { permisionGuard } from '../core/guards/permission/permision.guard'
import { MapReportePageComponent } from './pages/map-reporte-page/map-reporte-page.component'

const routes: Routes = [
    {
        path: '',
        component: MapReportePageComponent,
        // canActivate: [permisionGuard],
        // data: { menukey: 'reporte', action: 'read' },
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ReporteRoutingModule {}
