import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { MenuVm } from '../../../../models/vm/menu.vm'
import { PermisoDto } from '../../../../models/dtos/permiso-list.dto'
import { SpanForm } from '../../models/interfaces/span-form'

@Component({
    selector: 'rol-form',
    standalone: false,
    templateUrl: './rol-form.component.html',
    styleUrl: './rol-form.component.css',
})
export class RolFormComponent {
    @Input() form!: FormGroup
    @Input() title!: string
    @Input() span?: SpanForm
    @Input() menuList: MenuVm[] = []
    @Input() permisoList: PermisoDto[] = []
    @Input() isInvalidField!: (field: string) => boolean | null
    @Input() getErrorMessage!: (field: string) => string | null
    @Output() submitted = new EventEmitter<void>()

    onSubmit(): void {
        this.submitted.emit()
    }
}
