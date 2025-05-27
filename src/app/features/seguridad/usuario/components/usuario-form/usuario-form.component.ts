import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { SpanFormRol } from '../../../rol/models/interfaces/span-form-rol'
import { RoleDto } from '../../../rol/models/dtos/role-list.dto'

@Component({
    selector: 'usuario-form',
    standalone: false,
    templateUrl: './usuario-form.component.html',
    styleUrl: './usuario-form.component.css',
})
export class UsuarioFormComponent {
    @Input() form!: FormGroup
    @Input() title!: string
    @Input() roleList!: RoleDto[]
    @Input() span?: SpanFormRol
    @Input() isInvalidField!: (field: string) => boolean | null
    @Input() getErrorMessage!: (field: string) => string | null
    @Output() submitted = new EventEmitter<void>()

    onSubmit(): void {
        this.submitted.emit()
    }
}
