import { Component, OnInit } from '@angular/core'
import { MenuService } from '../../services/menu/menu.service'
import { MenuVm } from '../../models/vm/menu.vm'
import { mapMenuDtoToVmList } from '../../models/vm/menu.mapper'
import { PermissionService } from '../../services/permission/permission.service'

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
        private _permissionService: PermissionService
    ) {}

    ngOnInit() {
        this.getMenu()
    }

    getMenu() {
        this._menuService.getMenu().subscribe(({ data }) => {
            const menus = mapMenuDtoToVmList(data)
            console.log(menus)
            console.log(this._permissionService.userHasMenu('roles'))
            // console.log(menus)
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
