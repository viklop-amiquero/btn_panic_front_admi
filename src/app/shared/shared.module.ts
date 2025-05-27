import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from './material/material.module'
import { FormsModule } from './forms/forms.module'
import { RouterModule } from '@angular/router'
import { EstadoDirective } from './directives/estado.directive'

@NgModule({
    declarations: [EstadoDirective],
    imports: [CommonModule, MaterialModule, RouterModule],
    exports: [MaterialModule, FormsModule, EstadoDirective],
})
export class SharedModule {}
