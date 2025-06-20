import { Component, OnInit } from '@angular/core'
import { RoutesName as rn } from '../../../../../shared/routes/routes'
import { HeaderLayoutService } from '../../../../services/headerLayout/header-layout.service'
import { PermissionService } from '../../../../services/permission/permission.service'
@Component({
    selector: 'app-index-categoria-page',
    standalone: false,
    templateUrl: './index-categoria-page.component.html',
    styleUrl: './index-categoria-page.component.css',
})
export class IndexCategoriaPageComponent implements OnInit {
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
                { label: 'Lista', link: '' },
            ],
            title: 'Categorías',
            showButton: this.showButtonSave,
            buttonLabel: 'Nueva categoría',
            buttonIcon: 'add',
            link: `${rn.CATEGORIA.create.route}`,
        })
    }

    setValueButton(): void {
        this.showButtonSave = this._permissionService.userHasPermission(
            'usuarios',
            'create'
        )
    }
}
