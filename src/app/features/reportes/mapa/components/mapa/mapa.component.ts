import { Component, OnInit } from '@angular/core'
import { ReporteService } from '../../../reporte/services/reporte.service'
import { forkJoin } from 'rxjs'
import { leafletHelper } from '../../../shared/leaflet/leaflet.helper'
import * as L from 'leaflet'
import { ReporteDataMapaVM } from '../../../models/vms/reporte-data-mapa.vm'
import { reporteMapper } from '../../../models/vms/reporte.mapper'
import { EchoService } from '../../../../services/echo/echo.service'

@Component({
    selector: 'reporte-mapa',
    standalone: false,
    templateUrl: './mapa.component.html',
    styleUrl: './mapa.component.css',
})
export class MapaComponent implements OnInit {
    private map: any
    private userMaker: L.Marker<any> | undefined
    // private reportes?: ReporteDataMapaVM[]

    constructor(
        // private _reporteService: ReporteService,
        private _echoService: EchoService
    ) {}

    ngOnInit(): void {
        this._echoService.listenToReportes((data) => {
            console.log(data.reporte)
            this.focusOnReporte(data.reporte)
        })

        this._echoService.listenReporteUpdated((id) => {
            console.log('reporte actualizado', id)
            // this.loadMarkers()
        })
        // forkJoin({ reportes: this._reporteService.getReportes() }).subscribe({
        //     next: ({ reportes }) => {
        //         this.reportes = reporteMapper(reportes.data)
        //         this.loadMarkers()
        //     },
        //     error: (err) => {},
        // })
        this.initMap()
    }

    private initMap() {
        this.map = L.map('map').setView([-13.169749, -74.199644], 15)
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(
            this.map
        )
    }

    private focusOnReporte(reporte: any) {
        if (!reporte?.latitud || !reporte?.longitud) return

        const lat = Number(reporte.latitud)
        const lng = Number(reporte.longitud)

        // Centra el mapa
        this.map.setView([lat, lng], 18)

        // Agrega el marcador
        const marker = L.marker([lat, lng], {
            icon: leafletHelper.alertIcon, // Usa el mismo ícono que los demás
        }).addTo(this.map)

        // Popup opcional con contenido dinámico
        marker
            .bindPopup(
                `<strong>📍 Nuevo reporte</strong><br>${
                    reporte.categoria || ''
                }`
            )
            .openPopup()
    }

    // private loadMarkers() {
    //     if (this.reportes?.length === 0) return

    //     this.reportes!.forEach((reporte) => {
    //         const marker = L.marker(
    //             [Number(reporte.latitud), Number(reporte.longitud)],
    //             { icon: leafletHelper.alertIcon }
    //         ).addTo(this.map)
    //         marker.bindPopup(`<strong>${reporte.categoria}</strong>`)
    //     })
    // }
}
