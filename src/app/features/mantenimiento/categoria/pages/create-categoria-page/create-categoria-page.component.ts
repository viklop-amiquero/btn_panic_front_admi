import { Component, OnInit } from '@angular/core'
import { HeaderLayoutService } from '../../../../services/headerLayout/header-layout.service'
import { PermissionService } from '../../../../services/permission/permission.service'

@Component({
    selector: 'app-create-categoria-page',
    standalone: false,
    templateUrl: './create-categoria-page.component.html',
    styleUrl: './create-categoria-page.component.css',
})
export class CreateCategoriaPageComponent implements OnInit {
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
                { label: 'Categoría', link: '' },
                { label: 'Crear', link: '' },
            ],
            title: 'Categorías',
            showButton: false,
        })
    }

    setValueButton(): void {
        this.showButtonSave = this._permissionService.userHasPermission(
            'usuarios',
            'create'
        )
    }
}
