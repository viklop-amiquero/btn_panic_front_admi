import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { IndexReportePageComponent } from './pages/index-reporte-page/index-reporte-page.component'
import { permisionGuard } from '../../core/guards/permission/permision.guard'

const routes: Routes = [
    {
        path: '',
        component: IndexReportePageComponent,
        canActivate: [permisionGuard],
        data: { menuKey: 'detalle', action: 'read' },
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ReporteRoutingModule {}
