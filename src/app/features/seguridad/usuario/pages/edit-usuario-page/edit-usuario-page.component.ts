import { Component, OnInit } from '@angular/core'
import { HeaderLayoutService } from '../../../../services/headerLayout/header-layout.service'
import { RoutesName } from '../../../../../shared/routes/routes'
import { SpanForm } from '../../../rol/models/interfaces/span-form'
import { UsuarioService } from '../../services/usuario.service'
import { ActivatedRoute, Router } from '@angular/router'
import { FormBaseComponent } from '../../../../../shared/base/form-base'
import { ValidatorsService } from '../../../../../shared/services/validators/validators.service'
import { buildUsuarioForm } from '../../../../../shared/helpers/buil-usuario-form'
import { RolService } from '../../../rol/services/rol.service'
import { UsuarioFormData } from '../../models/dtos/usuario-form.dto'
import { SnackbarService } from '../../../../../shared/services/snackbar/snackbar.service'

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
    id_usuario!: number
    span?: SpanForm
    rn = RoutesName
    usuarioFormData!: UsuarioFormData

    constructor(
        private _headerLayoutService: HeaderLayoutService,
        private _validatorService: ValidatorsService,
        private _usuarioService: UsuarioService,
        private _activateRoute: ActivatedRoute,
        private _rolService: RolService,
        private _snackbarService: SnackbarService,
        private _router: Router
    ) {
        super(_validatorService)
    }

    ngOnInit(): void {
        this.setHeaderLayoutService()
        this.getUsuario()
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
                this.usuarioFormData = data
                this.id_usuario = data.id
                this.setFormValues()
                this.setSpanValues()
            })
        })
    }

    setSpanValues(): void {
        const { nombre, apellido } = this.usuarioFormData
        this.span = {
            title: `${nombre} ${apellido}`,
            show: true,
        }
    }

    setFormValues(): void {
        if (!this.usuarioFormData) return

        const {
            nombre,
            apellido,
            direccion_domicilio,
            dni,
            digito_verificador,
            telefono,
            role_id,
        } = this.usuarioFormData

        this.form.patchValue({
            name: nombre,
            apellido,
            direccion_domicilio,
            dni,
            digito_verificador,
            telefono,
            role_id,
        })
    }

    buildForm(): void {
        this.form = buildUsuarioForm(this._validatorService)
    }

    onSubmit(): void {
        if (!this.id_usuario) return

        this.onSubmitForm(this.form, () => {
            const request = this.getCurrentCredentials()
            console.log(request)
            const id = this.id_usuario

            this._usuarioService.updateUsuario(id, request).subscribe({
                next: ({ message }) => {
                    this._snackbarService.success(`${message}`)

                    this.form.reset()
                    this._router.navigate([RoutesName.USUARIO.index.route])
                },
                error: (err) => {
                    this._snackbarService.error(
                        'Ocurió un error, por favor inténtelo más tarde'
                    )
                },
            })
        })
    }
}
