import { Component, OnInit } from '@angular/core'
import { MenuService } from '../../services/menu/menu.service'
import { MenuDto } from '../../models/dtos/menu-list.dto'

@Component({
    selector: 'sidenav-feature',
    standalone: false,
    templateUrl: './sidenav-feature.component.html',
    styleUrl: './sidenav-feature.component.css',
})
export class SidenavFeatureComponent implements OnInit {
    public menuList: MenuDto[] = []
    public openMenu: number | null = null

    constructor(private _menuService: MenuService) {}

    ngOnInit() {
        this.getMenu()
        this.formaterMenu()
    }

    formaterMenu() {
        let list_menu = this.menuList.filter((menu) => menu.nivel === '2')
        console.log(list_menu)
    }

    getMenu() {
        this._menuService.getMenu().subscribe((response) => {
            this.menuList = response.data // <- extraes el array
        })
    }

    toggleMenu(menuId: number) {
        this.openMenu = this.openMenu === menuId ? null : menuId
    }
}
