import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'mapa-clock',
    standalone: false,
    templateUrl: './clock.component.html',
    styleUrl: './clock.component.css',
})
export class ClockComponent implements OnInit {
    currentTime: Date = new Date()

    ngOnInit(): void {
        setInterval(() => {
            this.currentTime = new Date()
        }, 1000)
    }
}
