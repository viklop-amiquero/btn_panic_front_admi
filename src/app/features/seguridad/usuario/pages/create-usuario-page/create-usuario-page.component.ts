import { Component, OnInit } from '@angular/core'
import { HeaderLayoutService } from '../../../../services/headerLayout/header-layout.service'
import { RoutesName } from '../../../../../shared/routes/routes'
import { FormBaseComponent } from '../../../../../shared/base/form-base'
import { ValidatorsService } from '../../../../../shared/services/validators/validators.service'
import { buildUsuarioForm } from '../../../../../shared/helpers/buil-usuario-form'
import { RolService } from '../../../rol/services/rol.service'
import { RoleDto } from '../../../rol/models/dtos/role-list.dto'
import { UsuarioService } from '../../services/usuario.service'
import { SnackbarService } from '../../../../../shared/services/snackbar/snackbar.service'
import { Router } from '@angular/router'

@Component({
    selector: 'app-create-usuario-page',
    standalone: false,
    templateUrl: './create-usuario-page.component.html',
    styleUrl: './create-usuario-page.component.css',
})
export class CreateUsuarioPageComponent
    extends FormBaseComponent
    implements OnInit
{
    title = 'Nuevo usuario'
    rn = RoutesName
    // roleList!: RoleDto[]
    constructor(
        private _headerLayoutService: HeaderLayoutService,
        private _validatorService: ValidatorsService,
        private _roleService: RolService,
        private _usuarioService: UsuarioService,
        private _snackbarService: SnackbarService,
        private _router: Router
    ) {
        super(_validatorService)
    }

    ngOnInit(): void {
        this.setHeaderLayoutService()
        // this.getRoles()
    }

    setHeaderLayoutService(): void {
        this._headerLayoutService.setHeader({
            breadcrumbs: [
                { label: 'Usuario', link: '' },
                { label: 'Crear', link: '' },
            ],
            title: 'Usuarios',
            showButton: false,
            buttonLabel: 'Nuevo Rol',
            buttonIcon: 'add',
            link: `${this.rn.USUARIO.create.route}`,
        })

        this.buildForm()
    }

    buildForm() {
        this.form = buildUsuarioForm(this._validatorService)
    }

    // getRoles() {
    //     this._roleService.getRoles().subscribe(({ data }) => {
    //         this.roleList = data
    //     })
    // }

    onSubmit(): void {
        this.onSubmitForm(this.form, () => {
            const data = this.getCurrentCredentials()
            this._usuarioService.createUsuario(data).subscribe({
                next: ({ message }) => {
                    this._snackbarService.success(`${message}`)
                    this.form.reset()
                    this._router.navigate([RoutesName.USUARIO.index.route])
                },
                error: (err) => {
                    this._snackbarService.error(
                        'Ocurió un error, por favor inténtelo más tarde',
                        3000
                    )
                },
            })
        })
    }
}
