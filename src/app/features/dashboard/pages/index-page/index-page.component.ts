import { Component, OnInit } from '@angular/core'
import { PermissionService } from '../../../services/permission/permission.service'
import { RoleMenuAuth } from '../../../../auth/models/dtos/RoleMenuAuth.dto'
import { RolService } from '../../../seguridad/rol/services/rol.service'

@Component({
    selector: 'app-index-page',
    standalone: false,
    templateUrl: './index-page.component.html',
    styleUrl: './index-page.component.css',
})
export class IndexPageComponent implements OnInit {
    public roleMenus!: RoleMenuAuth[]

    constructor(private _rolService: RolService) {}

    ngOnInit(): void {
        this.getRoleMenuAuth()
    }

    getRoleMenuAuth() {
        this._rolService.getRoleMenuAuth().subscribe({
            next: ({ role_menu }) => {
                this.roleMenus = role_menu
            },
            error: (err) => {},
        })
    }
}
