import { Component, OnInit } from '@angular/core'
import { RoutesName } from '../../../../../shared/routes/routes'
import { HeaderLayoutService } from '../../../../services/headerLayout/header-layout.service'
import { PermisoService } from '../../../../services/permiso/permiso.service'
import { Validators, FormBuilder } from '@angular/forms'
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
    private _fb: FormBuilder = new FormBuilder()
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

        this._headerLayoutService.setHeader({
            breadcrumbs: [
                { label: 'Rol', link: `${this.rn.ROL.index.route}` },
                { label: 'Crear', link: `${this.rn.ROL.create.route}` },
            ],
            title: 'Roles',
            showButton: false,
        })
    }

    buildForm() {
        this.form = this._fb.group({
            nombre: [
                '',
                [Validators.required, Validators.pattern(this.namePattern)],
            ],
            descripcion: ['', Validators.required],
        })

        this.menuList.forEach((menu) => {
            if (menu.children.length === 0) {
                this.form.addControl(
                    `menu_${menu.id}`,
                    this._fb.control('', Validators.required)
                )
            } else {
                menu.children.forEach((child) => {
                    this.form.addControl(
                        `menu_${child.id}`,
                        this._fb.control('', Validators.required)
                    )
                })
            }
        })
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
