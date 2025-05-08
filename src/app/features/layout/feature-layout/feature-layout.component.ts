import { Component, ViewChild, OnInit } from '@angular/core'
import { MatSidenav } from '@angular/material/sidenav'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
@Component({
    selector: 'app-feature-layout',
    standalone: false,
    templateUrl: './feature-layout.component.html',
    styleUrl: './feature-layout.component.css',
})
export class FeatureLayoutComponent implements OnInit {
    @ViewChild('sidenav') sidenav!: MatSidenav

    sidenavMode: 'side' | 'over' = 'side'
    sidenavOpened = true

    constructor(private breakpointObserver: BreakpointObserver) {}

    ngOnInit(): void {
        this.breakpointObserver
            .observe([Breakpoints.Handset])
            .subscribe((result) => {
                const isMobile = result.matches
                this.sidenavMode = isMobile ? 'over' : 'side'
                this.sidenavOpened = !isMobile
            })
    }

    toggleSidenav() {
        this.sidenav.toggle()
    }

    closeOnMobile() {
        if (this.sidenavMode === 'over') {
            this.sidenav.close()
        }
    }
}
