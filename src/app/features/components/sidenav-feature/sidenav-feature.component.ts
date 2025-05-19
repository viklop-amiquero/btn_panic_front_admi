import { Component, OnInit } from '@angular/core'
import { MenuService } from '../../services/menu/menu.service'
import { MenuVm } from '../../models/vm/menu.vm'
import { mapMenuDtoToVmList } from '../../models/vm/menu.mapper'

@Component({
    selector: 'sidenav-feature',
    standalone: false,
    templateUrl: './sidenav-feature.component.html',
    styleUrl: './sidenav-feature.component.css',
})
export class SidenavFeatureComponent implements OnInit {
    menuList: MenuVm[] = []
    openMenus: Set<number> = new Set()

    constructor(private _menuService: MenuService) {}

    ngOnInit() {
        this.getMenu()
    }

    getMenu() {
        this._menuService.getMenu().subscribe(({ data }) => {
            this.menuList = mapMenuDtoToVmList(data)
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
