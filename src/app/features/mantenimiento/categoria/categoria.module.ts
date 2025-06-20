import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CategoriaRoutingModule } from './categoria-routing.module'
import { EditCategoriaPageComponent } from './pages/edit-categoria-page/edit-categoria-page.component'
import { CreateCategoriaPageComponent } from './pages/create-categoria-page/create-categoria-page.component'
import { IndexCategoriaPageComponent } from './pages/index-categoria-page/index-categoria-page.component'
import { CategoriaListComponent } from './components/categoria-list/categoria-list.component'
import { SharedModule } from '../../../shared/shared.module'

@NgModule({
    declarations: [
        EditCategoriaPageComponent,
        CreateCategoriaPageComponent,
        IndexCategoriaPageComponent,
        CategoriaListComponent,
    ],
    imports: [CommonModule, CategoriaRoutingModule, SharedModule],
})
export class CategoriaModule {}
