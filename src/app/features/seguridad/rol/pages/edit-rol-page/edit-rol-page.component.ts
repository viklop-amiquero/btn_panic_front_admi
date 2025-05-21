import { Component, OnInit } from '@angular/core'
import { HeaderLayoutService } from '../../../../services/headerLayout/header-layout.service'
import { FormBaseComponent } from '../../../../../shared/base/form-base'
import { ValidatorsService } from '../../../../../shared/services/validators/validators.service'
import { FormBuilder, Validators } from '@angular/forms'
import { PermisoDto } from '../../../../models/dtos/permiso-list.dto'
import { MenuVm } from '../../../../models/vm/menu.vm'
import { RoutesName } from '../../../../../shared/routes/routes'
import { PermisoService } from '../../../../services/permiso/permiso.service'
import { MenuService } from '../../../../services/menu/menu.service'
import { mapMenuDtoToVmList } from '../../../../models/vm/menu.mapper'
import { forkJoin, switchMap, tap } from 'rxjs'
import { ActivatedRoute, Router } from '@angular/router'
import { RolService } from '../../services/rol.service'
import { RoleMenuByIdDto } from '../../models/dtos/role-menu-by-id-list.dto'
import { mapToRoleMenuCardVm } from '../../models/vm/RoleMenuCard.mapper'
import { RoleMenuCardVm } from '../../models/vm/role-menu-card.vm'

@Component({
    selector: 'app-edit-rol-page',
    standalone: false,
    templateUrl: './edit-rol-page.component.html',
    styleUrl: './edit-rol-page.component.css',
})
export class EditRolPageComponent extends FormBaseComponent implements OnInit {
    private _fb: FormBuilder = new FormBuilder()
    rolMenu: RoleMenuCardVm[] = []
    permisoList: PermisoDto[] = []
    menuList: MenuVm[] = []

    r_rol = RoutesName.ROL.index.route
    r_rolEdit = RoutesName.ROL.edit.route

    constructor(
        private _headerLayoutService: HeaderLayoutService,
        private _validatorService: ValidatorsService,
        private _permisoService: PermisoService,
        private _menuService: MenuService,
        private _activateRoute: ActivatedRoute,
        private _rolService: RolService,
        private _router: Router
    ) {
        super(_validatorService)
    }

    ngOnInit(): void {
        forkJoin({
            permisos: this._permisoService.getPermiso(),
            menus: this._menuService.getMenu(),
        })
            .pipe(
                switchMap(({ permisos, menus }) => {
                    this.permisoList = permisos.data
                    this.menuList = mapMenuDtoToVmList(menus.data)
                    this.buildForm()

                    const id = this._activateRoute.snapshot.params['id']

                    return this._rolService.getRoleMenuById(id)
                }),
                tap((data) => {
                    if (!data) return this._router.navigate([this.r_rol])
                    this.rolMenu = mapToRoleMenuCardVm(data)
                    this.setFormValues()
                    return
                })
            )
            .subscribe()

        this._headerLayoutService.setHeader({
            breadcrumbs: [
                { label: 'Rol', link: `${this.r_rol}` },
                { label: 'Editar', link: `${this.r_rolEdit}` },
            ],
            title: 'Roles',
            showButton: false,
        })
    }

    setFormValues(): void {
        if (!this.rolMenu.length) return

        const rol = this.rolMenu[0]

        this.form.patchValue({
            nombre: rol.rol_name,
            descripcion: rol.rol_description,
        })

        rol.permisos.forEach((permiso) => {
            const controlName = `menu_${permiso.menu_id}`
            if (this.form.contains(controlName)) {
                this.form.get(controlName)?.setValue(permiso.permiso_id)
            }
        })
    }

    // ngOnInit(): void {
    //     forkJoin({
    //         permisos: this._permisoService.getPermiso(),
    //         menus: this._menuService.getMenu(),
    //     }).subscribe(({ permisos, menus }) => {
    //         this.permisoList = permisos.data
    //         this.menuList = mapMenuDtoToVmList(menus.data)

    //         this.buildForm()
    //     })

    //     this._activateRoute.params
    //         .pipe(switchMap(({ id }) => this._rolService.getRoleMenuById(id)))
    //         .subscribe((data) => {
    //             if (!data) return this._router.navigate([this.r_rol])
    //             this.rolMenu = mapToRoleMenuCardVm(data)
    //             console.log(this.rolMenu)
    //             return
    //         })

    //     this._headerLayoutService.setHeader({
    //         breadcrumbs: [
    //             { label: 'Rol', link: `${this.r_rol}` },
    //             { label: 'Editar', link: `${this.r_rolEdit}` },
    //         ],
    //         title: 'Roles',
    //         showButton: false,
    //     })
    // }

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

    onSubmit(): void {}
}
