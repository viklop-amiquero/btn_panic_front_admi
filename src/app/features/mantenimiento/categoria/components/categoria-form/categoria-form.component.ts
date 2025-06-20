import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { SpanForm } from '../../../../seguridad/rol/models/interfaces/span-form'

@Component({
    selector: 'categoria-form',
    standalone: false,
    templateUrl: './categoria-form.component.html',
    styleUrl: './categoria-form.component.css',
})
export class CategoriaFormComponent {
    @Input() form!: FormGroup
    @Input() title!: string
    @Input() span?: SpanForm
    @Input() isInvalidField!: (field: string) => boolean | null
    @Input() getErrorMessage!: (field: string) => string | null
    @Output() submitted = new EventEmitter<void>()

    onSubmit(): void {
        this.submitted.emit()
    }
}
