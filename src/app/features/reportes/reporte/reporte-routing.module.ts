import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { IndexReportePageComponent } from './pages/index-reporte-page/index-reporte-page.component'

const routes: Routes = [
    {
        path: '',
        component: IndexReportePageComponent,
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ReporteRoutingModule {}
