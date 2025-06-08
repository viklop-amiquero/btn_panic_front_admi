import { Injectable } from '@angular/core'
import { RoleMenuAuth } from '../../../auth/models/dtos/RoleMenuAuth.dto'
import { crud } from '../../../auth/models/types/crud.type'

@Injectable({
    providedIn: 'root',
})
export class PermissionService {
    public roleMenu!: RoleMenuAuth[]

    constructor() {}

    filterMenu(menuKey: string) {
        const roleMenu = this.roleMenu.filter(
            (roleMenu) => roleMenu.menu_clave === menuKey
        )

        return roleMenu
    }

    userHasPermission(menuKey: string, action: crud): boolean {
        const permiso_id = this.filterMenu(menuKey)[0].permiso_id
        switch (action) {
            case 'create':
                return permiso_id === 2 ? false : true
            case 'read':
                return permiso_id === 5 ? false : true
            case 'update':
                return permiso_id !== 4 && permiso_id !== 1 ? false : true
            case 'delete':
                return permiso_id === 1 ? true : false
        }
    }
}
