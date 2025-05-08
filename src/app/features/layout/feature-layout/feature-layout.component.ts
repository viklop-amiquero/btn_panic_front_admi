import { Component, ViewChild } from '@angular/core'
import { MatSidenav } from '@angular/material/sidenav'

@Component({
    selector: 'app-feature-layout',
    standalone: false,
    templateUrl: './feature-layout.component.html',
    styleUrl: './feature-layout.component.css',
})
export class FeatureLayoutComponent {
    @ViewChild('sidenav') sidenav!: MatSidenav

    toggleSidenav() {
        this.sidenav.toggle()
    }
}
