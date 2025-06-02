import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { IndexUsuarioPageComponent } from './pages/index-usuario-page/index-usuario-page.component'
import { CreateUsuarioPageComponent } from './pages/create-usuario-page/create-usuario-page.component'
import { EditUsuarioPageComponent } from './pages/edit-usuario-page/edit-usuario-page.component'
import { RoutesName as rn } from '../../../shared/routes/routes'

const routes: Routes = [
    {
        path: '',
        component: IndexUsuarioPageComponent,
    },
    {
        path: rn.USUARIO.create.route,
        component: CreateUsuarioPageComponent,
    },
    {
        path: `{rn.USUARIO.edit.route}/:id`,
        component: EditUsuarioPageComponent,
    },
    {
        path: '**',
        redirectTo: `/${rn.ROL.index.route}`,
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsuarioRoutingModule {}
