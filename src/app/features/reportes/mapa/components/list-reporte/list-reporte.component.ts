import { Component, OnInit } from '@angular/core'
import { ReporteService } from '../../../reporte/services/reporte.service'
import { ConfirmDialogService } from '../../../../services/confirmdialog/confirm-dialog.service'
import { ReporteDataMapaVM } from '../../../models/vms/reporte-data-mapa.vm'
import { reporteMapper } from '../../../models/vms/reporte.mapper'

@Component({
    selector: 'reporte-list',
    standalone: false,
    templateUrl: './list-reporte.component.html',
    styleUrl: './list-reporte.component.css',
})
export class ListReporteComponent implements OnInit {
    displayedColumns: string[] = ['numero', 'categoria', 'acciones']

    dataSource!: ReporteDataMapaVM[]

    constructor(
        private _reporteService: ReporteService,
        private _confirmDialogService: ConfirmDialogService
    ) {}

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

    showReporte(id: number) {
        // console.log(id)
        this._reporteService.getReporteById(id).subscribe(({ data }) => {
            // console.log(resp)
            this._confirmDialogService.updateReporte(data)
        })
    }
}
