import { Component } from '@angular/core'

@Component({
    selector: 'sidenav-feature',
    standalone: false,
    templateUrl: './sidenav-feature.component.html',
    styleUrl: './sidenav-feature.component.css',
})
export class SidenavFeatureComponent {
    openMenu: string | null = null

    toggleMenu(menu: string) {
        this.openMenu = this.openMenu === menu ? null : menu
    }
}
