import { Component, OnInit } from '@angular/core'
import { ReporteDataMapaVM } from '../../models/vms/reporte-data-mapa.vm'
import { ReporteService } from '../../services/reporte.service'
import { reporteMapper } from '../../models/vms/reporte.mapper'

@Component({
    selector: 'reporte-list',
    standalone: false,
    templateUrl: './list-reporte.component.html',
    styleUrl: './list-reporte.component.css',
})
export class ListReporteComponent implements OnInit {
    displayedColumns: string[] = ['numero', 'categoria', 'acciones']

    dataSource!: ReporteDataMapaVM[]

    constructor(private _reporteService: ReporteService) {}

    ngOnInit(): void {
        this.getReportes()
    }

    getReportes() {
        this._reporteService.getReportes().subscribe({
            next: ({ data }) => {
                this.dataSource = reporteMapper(data)
            },
            error: (err) => {},
        })
    }
}
