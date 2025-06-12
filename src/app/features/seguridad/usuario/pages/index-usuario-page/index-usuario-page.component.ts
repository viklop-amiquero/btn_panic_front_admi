import { Component } from '@angular/core'
import { RoutesName } from '../../../../../shared/routes/routes'
import { HeaderLayoutService } from '../../../../services/headerLayout/header-layout.service'
import { PermissionService } from '../../../../services/permission/permission.service'

@Component({
    selector: 'app-index-usuario-page',
    standalone: false,
    templateUrl: './index-usuario-page.component.html',
    styleUrl: './index-usuario-page.component.css',
})
export class IndexUsuarioPageComponent {
    rn = RoutesName
    showButtonSave!: boolean

    constructor(
        private _headerLayoutService: HeaderLayoutService,
        private _permissionService: PermissionService
    ) {}

    ngOnInit(): void {
        this.setHeaderLayoutService()
    }

    setHeaderLayoutService(): void {
        this.setValueButton()
        this._headerLayoutService.setHeader({
            breadcrumbs: [
                { label: 'Usuario', link: '' },
                { label: 'Lista', link: `${this.rn.USUARIO.index.route}` },
            ],
            title: 'Usuarios',
            showButton: this.showButtonSave,
            buttonLabel: 'Nuevo usuario',
            buttonIcon: 'add',
            link: `${this.rn.USUARIO.create.route}`,
        })
    }

    setValueButton(): void {
        this.showButtonSave = this._permissionService.userHasPermission(
            'usuarios',
            'create'
        )
    }
}
