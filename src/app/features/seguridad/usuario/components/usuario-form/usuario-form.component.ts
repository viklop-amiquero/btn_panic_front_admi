import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { RoleDto } from '../../../rol/models/dtos/role-list.dto'
import { SpanForm } from '../../../rol/models/interfaces/span-form'

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
    @Input() span?: SpanForm
    @Input() isInvalidField!: (field: string) => boolean | null
    @Input() getErrorMessage!: (field: string) => string | null
    @Output() submitted = new EventEmitter<void>()

    onSubmit(): void {
        this.submitted.emit()
    }
}
