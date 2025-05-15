import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { RolRoutingModule } from './rol-routing.module'
import { IndexRolPageComponent } from './pages/index-rol-page/index-rol-page.component'
import { CreateRolPageComponent } from './pages/create-rol-page/create-rol-page.component'
import { EditRolPageComponent } from './pages/edit-rol-page/edit-rol-page.component'
import { RolListTableComponent } from './components/rol-list-table/rol-list-table.component'
import { FeaturesModule } from '../../features.module'

@NgModule({
    declarations: [
        IndexRolPageComponent,
        CreateRolPageComponent,
        EditRolPageComponent,
        RolListTableComponent,
    ],
    imports: [CommonModule, RolRoutingModule, FeaturesModule],
})
export class RolModule {}
