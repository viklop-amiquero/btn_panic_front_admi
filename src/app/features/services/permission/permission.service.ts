import { Injectable } from '@angular/core'
import { RoleMenuAuthDto } from '../../../auth/models/dtos/RoleMenuAuth.dto'
import { LocalStorageService } from '../../../shared/services/localstorage/local-storage.service'
import { crud } from '../../../auth/models/types/crud.type'

@Injectable({
    providedIn: 'root',
})
export class PermissionService {
    private roleMenu!: RoleMenuAuthDto[]
    constructor(private _localStorageService: LocalStorageService) {
        this.loadRoleMenu()
    }

    loadRoleMenu() {
        const resp = this._localStorageService.loadEncoded('roleMenuAuth')

        if (!resp) {
            return
        }

        this.roleMenu = resp
    }

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

    // userHasMenu(menuKey: string): boolean {
    // userHasMenu(menuKey: string) {
    //     console.log(this.roleMenu)
    // const roleMenu = this.roleMenu.filter(
    //     (roleMenu) => roleMenu.menu_clave === menuKey
    // )

    // return true
    // }

    userHasMenu(menuKey: string): boolean {
        const roleMenu = this.roleMenu.find((rm) => rm.menu_clave === menuKey)
        return roleMenu !== undefined && roleMenu.permiso_id !== 5
    }

    // userHasMenu(menuKey: string): boolean {
    //     if (!this.roleMenu) return false
    //     return this.roleMenu.some((roleMenu) => roleMenu.menu_clave === menuKey)
    // }
}
