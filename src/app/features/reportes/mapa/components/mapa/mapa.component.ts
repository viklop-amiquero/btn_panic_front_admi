import { Component, Input, OnInit } from '@angular/core'
import { leafletHelper } from '../../../shared/leaflet/leaflet.helper'
import * as L from 'leaflet'
import { EchoService } from '../../../../services/echo/echo.service'
import { ReporteDataMapaVM } from '../../../models/vms/reporte-data-mapa.vm'

@Component({
    selector: 'reporte-mapa',
    standalone: false,
    templateUrl: './mapa.component.html',
    styleUrl: './mapa.component.css',
})
export class MapaComponent implements OnInit {
    private map: any
    private lastNewMarker: L.Marker | null = null

    // reporte-mapa.component.ts
    @Input() reporte!: ReporteDataMapaVM

    constructor(private _echoService: EchoService) {}

    ngOnInit(): void {
        this._echoService.listenToReportes((data) => {
            console.log(data.reporte)
            this.focusOnReporte(data.reporte)
        })

        this._echoService.listenReporteUpdated((id) => {
            console.log('reporte actualizado', id)
        })
        this.initMap()
    }

    ngOnChanges() {
        if (this.reporte) {
            console.log('🗺️ Recibido en hijo reporte:', this.reporte)
            this.focusOnReporte(this.reporte)
            // puedes enfocar aquí también si quieres
        }
    }

    private initMap() {
        this.map = L.map('map').setView([-13.169749, -74.199644], 15)
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(
            this.map
        )
    }

    private focusOnReporte(reporte: ReporteDataMapaVM) {
        if (!reporte?.latitud || !reporte?.longitud) return

        const lat = Number(reporte.latitud)
        const lng = Number(reporte.longitud)

        this.map.setView([lat, lng], 18)

        // Eliminar el marcador anterior si existe
        if (this.lastNewMarker) {
            this.map.removeLayer(this.lastNewMarker)
        }

        // Crear nuevo marcador
        this.lastNewMarker = L.marker([lat, lng], {
            icon: leafletHelper.alertIcon,
        }).addTo(this.map)

        this.lastNewMarker
            .bindPopup(
                `<strong>📍 Nuevo reporte</strong><br>${
                    reporte.categoria || ''
                }`
            )
            .openPopup()
    }
}
