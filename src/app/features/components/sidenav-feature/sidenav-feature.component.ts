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
            console.log(data)
            const filteredMenus = this.filterMenusByPermission(menus)
            this.menuList = filteredMenus
            console.log(this.menuList)
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

    filterMenusByPermission(menus: MenuVm[]): MenuVm[] {
        return menus
            .map((menu) => {
                const allowedChildren = this.filterMenusByPermission(
                    menu.children || []
                )

                const hasPermission = this._permissionService.userHasMenu(
                    menu.clave
                )

                // Mostrar el menú si tiene permiso o si algún hijo tiene permiso
                if (hasPermission || allowedChildren.length > 0) {
                    return {
                        ...menu,
                        children: allowedChildren,
                    }
                }

                return null
            })
            .filter((menu): menu is MenuVm => menu !== null)
    }
}
