import { Component, OnInit } from '@angular/core'
import { ReporteService } from '../../../reporte/services/reporte.service'
import { forkJoin } from 'rxjs'
import { leafletHelper } from '../../../shared/leaflet/leaflet.helper'
import * as L from 'leaflet'
import { ReporteDataMapaVM } from '../../../models/vms/reporte-data-mapa.vm'
import { reporteMapper } from '../../../models/vms/reporte.mapper'

@Component({
    selector: 'reporte-mapa',
    standalone: false,
    templateUrl: './mapa.component.html',
    styleUrl: './mapa.component.css',
})
export class MapaComponent implements OnInit {
    private map: any
    private userMaker: L.Marker<any> | undefined
    private reportes?: ReporteDataMapaVM[]

    constructor(private _reporteService: ReporteService) {}

    ngOnInit(): void {
        forkJoin({ reportes: this._reporteService.getReportes() }).subscribe({
            next: ({ reportes }) => {
                this.reportes = reporteMapper(reportes.data)
                console.log(this.reportes)
                this.loadMarkers()
            },
            error: (err) => {},
        })
        this.initMap()
    }

    private initMap() {
        this.map = L.map('map').setView([-13.169749, -74.199644], 15)
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(
            this.map
        )
    }

    private loadMarkers() {
        if (this.reportes?.length === 0) return

        this.reportes!.forEach((reporte) => {
            const marker = L.marker(
                [Number(reporte.latitud), Number(reporte.longitud)],
                { icon: leafletHelper.alertIcon }
            ).addTo(this.map)
            marker.bindPopup(`<strong>${reporte.categoria}</strong>`)
        })
    }
}
