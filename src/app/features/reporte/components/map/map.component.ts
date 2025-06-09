import { Component, OnInit } from '@angular/core'
import * as L from 'leaflet'

@Component({
    selector: 'reporte-map',
    standalone: false,
    templateUrl: './map.component.html',
    styleUrl: './map.component.css',
})
export class MapComponent implements OnInit {
    private map: any

    private userMaker: L.Marker<any> | undefined

    registros = [
        { nombre: 'Comisaría Huamanga', lat: -13.1551, lng: -74.2312 },
        { nombre: 'Hospital Ayacucho', lat: -13.1525, lng: -74.2279 },
        { nombre: 'Colegio Guadalupe', lat: -13.1578, lng: -74.2331 },
    ]

    ngOnInit(): void {
        this.initMap()
        this.loadMarkers()
        throw new Error('Method not implement.')
    }

    private initMap() {
        this.map = L.map('map').setView([-13.155092, -74.23107], 15)
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(
            this.map
        )
    }

    private loadMarkers() {
        this.registros.forEach((registro) => {
            const marker = L.marker([registro.lat, registro.lng]).addTo(
                this.map
            )
            marker.bindPopup(`<strong>${registro.nombre}</strong>`)
        })
    }
}
