import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { RoleDto } from '../../../rol/models/dtos/role-list.dto'
import { SpanForm } from '../../../rol/models/interfaces/span-form'
import { RolService } from '../../../rol/services/rol.service'

@Component({
    selector: 'usuario-form',
    standalone: false,
    templateUrl: './usuario-form.component.html',
    styleUrl: './usuario-form.component.css',
})
export class UsuarioFormComponent implements OnInit {
    roleList!: RoleDto[]

    @Input() form!: FormGroup
    @Input() title!: string
    @Input() span?: SpanForm
    @Input() isInvalidField!: (field: string) => boolean | null
    @Input() getErrorMessage!: (field: string) => string | null
    @Output() submitted = new EventEmitter<void>()

    constructor(private _rolService: RolService) {}

    ngOnInit(): void {
        this.getRoles()
    }

    onSubmit(): void {
        this.submitted.emit()
    }

    getRoles() {
        this._rolService.getRoles().subscribe(({ data }) => {
            this.roleList = data
            console.log(data)
        })
    }
}
