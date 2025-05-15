import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { IndexRolPageComponent } from './pages/index-rol-page/index-rol-page.component'
import { RoutesName as rn } from '../../../shared/routes/routes'
import { CreateRolPageComponent } from './pages/create-rol-page/create-rol-page.component'
import { EditRolPageComponent } from './pages/edit-rol-page/edit-rol-page.component'

const routes: Routes = [
    {
        path: '',
        component: IndexRolPageComponent,
    },
    {
        path: rn.ROL.create.route,
        component: CreateRolPageComponent,
    },
    {
        path: rn.ROL.edit.route,
        component: EditRolPageComponent,
    },
    {
        path: '**',
        redirectTo: rn.ROL.index.route,
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RolRoutingModule {}
