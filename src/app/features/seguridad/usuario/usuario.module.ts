import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UsuarioRoutingModule } from './usuario-routing.module'
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component'
import { IndexUsuarioPageComponent } from './pages/index-usuario-page/index-usuario-page.component'
import { EditUsuarioPageComponent } from './pages/edit-usuario-page/edit-usuario-page.component'
import { CreateUsuarioPageComponent } from './pages/create-usuario-page/create-usuario-page.component'
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component'
import { FeaturesModule } from '../../features.module'
import { SharedModule } from '../../../shared/shared.module'

@NgModule({
    declarations: [
        UsuarioFormComponent,
        IndexUsuarioPageComponent,
        EditUsuarioPageComponent,
        CreateUsuarioPageComponent,
        UsuarioListComponent,
    ],
    imports: [CommonModule, UsuarioRoutingModule, FeaturesModule, SharedModule],
})
export class UsuarioModule {}
