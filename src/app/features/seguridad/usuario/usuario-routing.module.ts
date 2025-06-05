import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { IndexUsuarioPageComponent } from './pages/index-usuario-page/index-usuario-page.component'
import { CreateUsuarioPageComponent } from './pages/create-usuario-page/create-usuario-page.component'
import { EditUsuarioPageComponent } from './pages/edit-usuario-page/edit-usuario-page.component'
import { RoutesName as rn } from '../../../shared/routes/routes'
import { permisionGuard } from '../../core/guards/permission/permision.guard'

const routes: Routes = [
    {
        path: '',
        component: IndexUsuarioPageComponent,
        canActivate: [permisionGuard],
        data: { menuKey: 'usuarios', action: 'read' },
    },
    {
        path: rn.USUARIO.create.route,
        component: CreateUsuarioPageComponent,
        canActivate: [permisionGuard],
        data: { menuKey: 'usuarios', action: 'create' },
    },
    {
        path: `${rn.USUARIO.edit.route}/:id`,
        component: EditUsuarioPageComponent,
        canActivate: [permisionGuard],
        data: { menuKey: 'usuarios', action: 'update' },
    },
    {
        path: '**',
        redirectTo: `/${rn.USUARIO.index.route}`,
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsuarioRoutingModule {}
