import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { IndexMapaPageComponent } from './pages/index-mapa-page/index-mapa-page.component'

const routes: Routes = [
    {
        path: '',
        component: IndexMapaPageComponent,
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MapaRoutingModule {}
