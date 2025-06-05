import { Injectable } from '@angular/core'
import { RoleMenuAuthDto } from '../../../auth/models/dtos/RoleMenuAuth.dto'
import { LocalStorageService } from '../../../shared/services/localstorage/local-storage.service'

@Injectable({
    providedIn: 'root',
})
export class PermissionService {
    private roleMenu!: RoleMenuAuthDto

    constructor(private _localStorageService: LocalStorageService) {
        this.loadRoleMenu()
    }

    loadRoleMenu() {
        const resp = this._localStorageService.getLocalStorage('roleMenuAuth')

        if (!resp) {
            return
        }

        this.roleMenu = JSON.parse(resp)
    }

    // userHasPermission(
    //     role_id: number,
    //     menuKey: string,
    //     action: 'create' | 'read' | 'update' | 'delete'
    // ): boolean {}
}
