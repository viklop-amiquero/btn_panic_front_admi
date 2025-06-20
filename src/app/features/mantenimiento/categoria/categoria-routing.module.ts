import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { IndexCategoriaPageComponent } from './pages/index-categoria-page/index-categoria-page.component'
import { CreateCategoriaPageComponent } from './pages/create-categoria-page/create-categoria-page.component'
import { EditCategoriaPageComponent } from './pages/edit-categoria-page/edit-categoria-page.component'
import { permisionGuard } from '../../core/guards/permission/permision.guard'
import { RoutesName as rn } from '../../../shared/routes/routes'

const routes: Routes = [
    {
        path: '',
        component: IndexCategoriaPageComponent,
        canActivate: [permisionGuard],
        data: { menuKey: 'categoria', action: 'read' },
    },
    {
        path: rn.CATEGORIA.create.route,
        component: CreateCategoriaPageComponent,
        canActivate: [permisionGuard],
        data: { menuKey: 'categoria', action: 'read' },
    },
    {
        path: `${rn.CATEGORIA.edit.route}/:id`,
        component: EditCategoriaPageComponent,
        canActivate: [permisionGuard],
        data: { menuKey: 'categoria', action: 'read' },
    },
    {
        path: '**',
        redirectTo: `/${rn.CATEGORIA.index.route}`,
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CategoriaRoutingModule {}
