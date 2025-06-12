import { Component, OnInit } from '@angular/core'
import { MenuService } from '../../services/menu/menu.service'
import { MenuVm } from '../../models/vm/menu.vm'
import { mapMenuDtoToVmList } from '../../models/vm/menu.mapper'
import { PermissionService } from '../../services/permission/permission.service'
import { RolService } from '../../seguridad/rol/services/rol.service'
import { forkJoin } from 'rxjs'
import { SnackbarService } from '../../../shared/services/snackbar/snackbar.service'
import { Router } from '@angular/router'
import { LocalStorageService } from '../../../shared/services/localstorage/local-storage.service'
import { RoleMenuAuth } from '../../../auth/models/dtos/RoleMenuAuth.dto'

@Component({
    selector: 'sidenav-feature',
    standalone: false,
    templateUrl: './sidenav-feature.component.html',
    styleUrl: './sidenav-feature.component.css',
})
export class SidenavFeatureComponent implements OnInit {
    menuList: MenuVm[] = []
    openMenus: Set<number> = new Set()

    constructor(
        private _menuService: MenuService,
        private _permissionService: PermissionService,
        private _rolService: RolService,
        private _snackBarService: SnackbarService,
        private _localStorageService: LocalStorageService,
        private _router: Router
    ) {}

    ngOnInit() {
        forkJoin({
            roleMenuAuth: this._rolService.getRoleMenuAuth(),
            menu: this._menuService.getMenu(),
        }).subscribe({
            next: ({ roleMenuAuth, menu }) => {
                this._permissionService.roleMenu = roleMenuAuth.role_menu
                // const menus = mapMenuDtoToVmList(menu.data)
                const menus = mapMenuDtoToVmList(menu.data)
                this.menuList = this.filtrarMenusPorClave(
                    menus,
                    roleMenuAuth.role_menu
                )
            },
            error: (err) => {
                this._snackBarService.warning(
                    'Ocurrió un problema con nuestros servidores, por favor. Ingrese más tarde.',
                    5000
                )
                this._localStorageService.clearLocalStorage()
            },
        })
    }

    filtrarMenusPorClave(menus: MenuVm[], auths: RoleMenuAuth[]): MenuVm[] {
        return menus
            .map((menu) => {
                // Filtrar hijos recursivamente
                const hijosFiltrados = this.filtrarMenusPorClave(
                    menu.children || [],
                    auths
                )

                // Verificar si este menú está autorizado con permiso distinto de 5
                const autorizado = auths.some(
                    (auth) =>
                        auth.menu_clave === menu.clave && auth.permiso_id !== 5
                )

                // Incluir si es autorizado o tiene hijos autorizados
                if (autorizado || hijosFiltrados.length > 0) {
                    return {
                        ...menu,
                        children: hijosFiltrados,
                    }
                }

                return null
            })
            .filter((menu): menu is MenuVm => menu !== null)
    }

    toggleMenu(id: number): void {
        if (!this.openMenus.has(id)) {
            this.openMenus.add(id)
            return
        }
        this.openMenus.delete(id)
    }

    isMenuOpen(id: number): boolean {
        return this.openMenus.has(id)
    }
}
