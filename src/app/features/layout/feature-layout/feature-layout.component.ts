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

    sidenavMode: 'side' | 'over' = 'over'
    sidenavOpened = true

    constructor(private breakpointObserver: BreakpointObserver) {}

    ngOnInit(): void {
        this.breakpointObserver
            .observe([Breakpoints.Handset])
            .subscribe((state) => {
                const isMobile = state.matches

                this.sidenavMode = isMobile ? 'over' : 'side'
                this.sidenavOpened = !isMobile

                if (!isMobile) {
                    this.sidenav.open()
                }
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
