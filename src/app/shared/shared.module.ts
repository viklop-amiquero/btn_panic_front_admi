import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from './material/material.module'
import { FormsModule } from './forms/forms.module'
import { RouterModule } from '@angular/router'

@NgModule({
    declarations: [],
    imports: [CommonModule, MaterialModule, RouterModule],
    exports: [MaterialModule, FormsModule],
})
export class SharedModule {}
