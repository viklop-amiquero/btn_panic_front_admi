import { Injectable } from '@angular/core'
import {
    RoleMenuAuth,
    RoleMenuAuthDto,
} from '../../../auth/models/dtos/RoleMenuAuth.dto'
import { LocalStorageService } from '../../../shared/services/localstorage/local-storage.service'
import { crud } from '../../../auth/models/types/crud.type'
import { environment } from '../../../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { HeaderHttpService } from '../headerHttp/header-http.service'
import { TokenService } from '../../../shared/services/token/token.service'
import { SnackbarService } from '../../../shared/services/snackbar/snackbar.service'
import { RolService } from '../../seguridad/rol/services/rol.service'

@Injectable({
    providedIn: 'root',
})
export class PermissionService {
    private _apiUrl: string = environment.apiUrl
    private roleMenu!: RoleMenuAuth[]
    private isLoad: boolean = false

    constructor(
        private _http: HttpClient,
        private _headerHttpService: HeaderHttpService,
        private _localStorageService: LocalStorageService,
        private _tokenService: TokenService,
        private _snackBarService: SnackbarService,
        private _rolService: RolService
    ) {
        this.loadRoleMenuAuth()
    }

    loadRoleMenuAuth() {
        this._rolService.getRoleMenuAuth().subscribe({
            next: ({ role_menu }) => {
                this.roleMenu = role_menu
            },
            error: (err) => {},
        })
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

    userHasMenu(menuKey: string): boolean {
        if (!this.roleMenu) return false
        const roleMenu = this.roleMenu.find((rm) => rm.menu_clave === menuKey)
        return roleMenu !== undefined && roleMenu.permiso_id !== 5
    }

    // userHasMenu(menuKey: string): boolean {
    //     const roleMenu = this.roleMenu.find((rm) => rm.menu_clave === menuKey)
    //     return roleMenu !== undefined && roleMenu.permiso_id !== 5
    // }
}
