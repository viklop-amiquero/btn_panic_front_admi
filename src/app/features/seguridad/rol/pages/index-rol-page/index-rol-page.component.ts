import { Component, OnInit } from '@angular/core'
import { RoutesName } from '../../../../../shared/routes/routes'
import { HeaderLayoutService } from '../../../../services/headerLayout/header-layout.service'
import { PermissionService } from '../../../../services/permission/permission.service'
@Component({
    selector: 'app-index-rol-page',
    standalone: false,
    templateUrl: './index-rol-page.component.html',
    styleUrl: './index-rol-page.component.css',
})
export class IndexRolPageComponent implements OnInit {
    rn = RoutesName
    showButton!: boolean
    constructor(
        private _headerLayoutService: HeaderLayoutService,
        private _permissionService: PermissionService
    ) {}

    ngOnInit(): void {
        this.setHeaderLayoutService()
    }

    setValueButton(): void {
        this.showButton = this._permissionService.userHasPermission(
            'roles',
            'create'
        )
    }

    setHeaderLayoutService(): void {
        this.setValueButton()
        console.log(this.showButton)
        this._headerLayoutService.setHeader({
            breadcrumbs: [
                { label: 'Rol', link: `${this.rn.ROL.index.route}` },
                { label: 'Lista', link: `${this.rn.ROL.index.route}` },
            ],
            title: 'Roles',
            showButton: this.showButton,
            buttonLabel: 'Nuevo Rol',
            buttonIcon: 'add',
            link: `${this.rn.ROL.create.route}`,
        })
    }
}
