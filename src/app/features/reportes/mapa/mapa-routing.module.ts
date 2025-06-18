import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { IndexMapaPageComponent } from './pages/index-mapa-page/index-mapa-page.component'
import { permisionGuard } from '../../core/guards/permission/permision.guard'

const routes: Routes = [
    {
        path: '',
        component: IndexMapaPageComponent,
        canActivate: [permisionGuard],
        data: { menuKey: 'mapa', action: 'read' },
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MapaRoutingModule {}
