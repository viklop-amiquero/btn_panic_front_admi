import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from './material/material.module'
import { FormsModule } from './forms/forms.module'

@NgModule({
    declarations: [],
    imports: [CommonModule, MaterialModule],
    exports: [MaterialModule, FormsModule],
})
export class SharedModule {}
