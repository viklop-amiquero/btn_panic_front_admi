import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-map-reporte-page',
    standalone: false,
    templateUrl: './map-reporte-page.component.html',
    styleUrl: './map-reporte-page.component.css',
})
export class MapReportePageComponent implements OnInit {
    currentTime: Date = new Date()
    private timer: any
    alarmActive: boolean = true

    ngOnInit(): void {
        this.timer = setInterval(() => {
            this.currentTime = new Date()
        }, 1000)
    }

    ngOnDestroy(): void {
        if (this.timer) {
            clearInterval(this.timer)
        }
    }
}
