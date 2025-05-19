import { Component, OnInit } from '@angular/core'
import { MenuService } from '../../services/menu/menu.service'
import { MenuVm } from '../../models/vm/menu.vm'
import { mapMenuDtoToVmList } from '../../models/vm/menu.mapper'
import { LocalStorageService } from '../../../shared/services/localstorage/local-storage.service'
import { PermisoService } from '../../services/permiso/permiso.service'

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
        private _localStorageService: LocalStorageService,
        private _permisoService: PermisoService
    ) {}

    ngOnInit() {
        this.getMenu()
        this.getPermiso()
    }

    getMenu() {
        this._menuService.getMenu().subscribe(({ data }) => {
            this.menuList = mapMenuDtoToVmList(data)
            this._localStorageService.setLocalStorage(
                'menu',
                JSON.stringify(data)
            )
        })
    }

    getPermiso() {
        this._permisoService.getPermiso().subscribe(({ data }) => {
            this._localStorageService.setLocalStorage(
                'permiso',
                JSON.stringify(data)
            )
        })
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
