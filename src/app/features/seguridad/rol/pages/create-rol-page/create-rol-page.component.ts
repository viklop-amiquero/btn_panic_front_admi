import { Component, OnInit } from '@angular/core'
import { RoutesName } from '../../../../../shared/routes/routes'
import { HeaderLayoutService } from '../../../../services/headerLayout/header-layout.service'
import { PermisoService } from '../../../../services/permiso/permiso.service'
import { PermisoDto } from '../../../../models/dtos/permiso-list.dto'
import { ValidatorsService } from '../../../../../shared/services/validators/validators.service'
import { MenuService } from '../../../../services/menu/menu.service'
import { MenuVm } from '../../../../models/vm/menu.vm'
import { mapMenuDtoToVmList } from '../../../../models/vm/menu.mapper'
import { FormBaseComponent } from '../../../../../shared/base/form-base'
import { forkJoin } from 'rxjs'
import { transformRolFormValue } from '../../../../../shared/helpers/transform-rol-form-value'
import { RolService } from '../../services/rol.service'
import { SnackbarService } from '../../../../../shared/services/snackbar/snackbar.service'
import { Router } from '@angular/router'
import { buildRolForm } from '../../../../../shared/helpers/build-rol-form'

@Component({
    selector: 'app-create-rol-page',
    standalone: false,
    templateUrl: './create-rol-page.component.html',
    styleUrl: './create-rol-page.component.css',
})
export class CreateRolPageComponent
    extends FormBaseComponent
    implements OnInit
{
    // private _fb: FormBuilder = new FormBuilder()
    title = 'Nuevo rol'
    permisoList: PermisoDto[] = []
    menuList: MenuVm[] = []

    rn = RoutesName

    constructor(
        private _headerLayoutService: HeaderLayoutService,
        private _validatorService: ValidatorsService,
        private _permisoService: PermisoService,
        private _menuService: MenuService,
        private _rolService: RolService,
        private _snackbarService: SnackbarService,
        private _router: Router
    ) {
        super(_validatorService)
    }

    ngOnInit(): void {
        forkJoin({
            permisos: this._permisoService.getPermiso(),
            menus: this._menuService.getMenu(),
        }).subscribe(({ permisos, menus }) => {
            this.permisoList = permisos.data
            this.menuList = mapMenuDtoToVmList(menus.data)

            this.buildForm()
        })

        this.setHeaderLayoutService()
    }

    setHeaderLayoutService(): void {
        this._headerLayoutService.setHeader({
            breadcrumbs: [
                { label: 'Rol', link: `${this.rn.ROL.index.route}` },
                { label: 'Crear', link: `${this.rn.ROL.create.route}` },
            ],
            title: 'Roles',
            showButton: false,
        })
    }

    buildForm(): void {
        this.form = buildRolForm(this.menuList, this.validatorService)
    }

    onSubmit(): void {
        this.onSubmitForm(this.form, () => {
            const request = transformRolFormValue(this.getCurrentCredentials())

            this._rolService.createRol(request).subscribe({
                next: ({ message }) => {
                    this._snackbarService.success(`${message}`)

                    this.form.reset()
                    this._router.navigate([RoutesName.ROL.index.route])
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
