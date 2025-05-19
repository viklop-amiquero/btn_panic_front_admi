import { Component, OnInit } from '@angular/core'
import { RoutesName } from '../../../../../shared/routes/routes'
import { HeaderLayoutService } from '../../../../services/headerLayout/header-layout.service'
import { PermisoService } from '../../../../services/permiso/permiso.service'
import { FormBuilder, Validators } from '@angular/forms'
import { PermisoDto } from '../../../../models/dtos/permiso-list.dto'
import { ValidatorsService } from '../../../../../shared/services/validators/validators.service'
import { MenuService } from '../../../../services/menu/menu.service'
import { MenuVm } from '../../../../models/vm/menu.vm'
import { mapMenuDtoToVmList } from '../../../../models/vm/menu.mapper'
import { FormBaseComponent } from '../../../../../shared/base/form-base'

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
        private _menuService: MenuService
    ) {
        super(_validatorService)
    }
    // public rolForm!: FormGroup

    ngOnInit(): void {
        this.getMenu()
        this.getPermiso()

        this._headerLayoutService.setHeader({
            breadcrumbs: [
                { label: 'Rol', link: `${this.rn.ROL.index.route}` },
                { label: 'Crear', link: `${this.rn.ROL.create.route}` },
            ],
            title: 'Roles',
            showButton: false,
        })

        this.form = this._fb.group({
            nombre: [
                '',
                [Validators.required, Validators.pattern(this.namePattern)],
            ],
            descripcion: ['', Validators.required],
        })
    }

    onSubmit(): void {
        this.onSubmitForm(this.form, () => {
            // lógica del submit si el form es válido
        })
    }

    getPermiso() {
        this._permisoService.getPermiso().subscribe(({ data }) => {
            this.permisoList = data
        })
    }

    getMenu() {
        this._menuService.getMenu().subscribe(({ data }) => {
            this.menuList = mapMenuDtoToVmList(data)
        })
    }
}
