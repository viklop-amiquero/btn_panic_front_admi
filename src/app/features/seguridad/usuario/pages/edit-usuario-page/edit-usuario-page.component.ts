import { Component, OnInit } from '@angular/core'
import { HeaderLayoutService } from '../../../../services/headerLayout/header-layout.service'
import { RoutesName } from '../../../../../shared/routes/routes'
import { SpanForm } from '../../../rol/models/interfaces/span-form'
import { UsuarioService } from '../../services/usuario.service'
import { ActivatedRoute } from '@angular/router'
import { UsuarioDto } from '../../models/dtos/usuario-paged.dto'
import { FormBaseComponent } from '../../../../../shared/base/form-base'
import { ValidatorsService } from '../../../../../shared/services/validators/validators.service'
import { buildUsuarioForm } from '../../../../../shared/helpers/buil-usuario-form'
import { RolService } from '../../../rol/services/rol.service'

@Component({
    selector: 'app-edit-usuario-page',
    standalone: false,
    templateUrl: './edit-usuario-page.component.html',
    styleUrl: './edit-usuario-page.component.css',
})
export class EditUsuarioPageComponent
    extends FormBaseComponent
    implements OnInit
{
    title = 'Editar usuario :'
    span?: SpanForm
    rn = RoutesName
    usuario!: UsuarioDto

    constructor(
        private _headerLayoutService: HeaderLayoutService,
        private _validatorService: ValidatorsService,
        private _usuarioService: UsuarioService,
        private _activateRoute: ActivatedRoute,
        private _rolService: RolService
    ) {
        super(_validatorService)
    }

    ngOnInit(): void {
        this.setHeaderLayoutService()
        this.getUsuario()
        this.setSpanValues()
        this.buildForm()
    }

    setHeaderLayoutService(): void {
        this._headerLayoutService.setHeader({
            breadcrumbs: [
                { label: 'Usuario', link: '' },
                { label: 'Editar', link: '' },
            ],
            title: 'Usuarios',
            showButton: false,
            buttonLabel: 'Editar Rol',
            buttonIcon: 'add',
            link: '',
        })
    }

    getUsuario(): void {
        this._activateRoute.params.subscribe(({ id }) => {
            this._usuarioService.getUsuarioById(id).subscribe(({ data }) => {
                // console.log(resp)
                this.usuario = data
                console.log(this.usuario)
            })
        })
    }

    setSpanValues(): void {
        // console.log(this.usuario)
        // this.span = {
        //     title: `${this.usuario.persona.nombre} ${this.usuario.persona.apellido}`,
        //     show: true,
        // }
    }

    setFormValues(): void {
        if (!this.usuario) return

        this.form.patchValue({
            name: 'hola mundo',
            apellido: 'hola',
            direccion_domicilio: 'hol',
        })
    }

    buildForm(): void {
        this.form = buildUsuarioForm(this._validatorService)
    }

    onSubmit(): void {}
}
