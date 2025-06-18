import { Component, OnInit } from '@angular/core'
import { ReporteService } from '../../../reporte/services/reporte.service'
import { ConfirmDialogService } from '../../../../services/confirmdialog/confirm-dialog.service'
import { ReporteDataMapaVM } from '../../../models/vms/reporte-data-mapa.vm'
import { reporteMapper } from '../../../models/vms/reporte.mapper'
import { EchoService } from '../../../../services/echo/echo.service'

@Component({
    selector: 'reporte-list',
    standalone: false,
    templateUrl: './list-reporte.component.html',
    styleUrl: './list-reporte.component.css',
})
export class ListReporteComponent implements OnInit {
    displayedColumns: string[] = ['numero', 'categoria', 'acciones']

    dataSource!: ReporteDataMapaVM[]
    private channel: any

    constructor(
        private _reporteService: ReporteService,
        private _confirmDialogService: ConfirmDialogService,
        // private _pusherService: PusherService
        private _echoService: EchoService
    ) {}

    ngOnInit(): void {
        this.getReportes()
        this._echoService.listenToReportes((data) => {
            console.log('nuvo reporte', data)
            this.getReportes()
        })
    }

    ngOnDestroy(): void {
        this._echoService.disconnect()
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

    listenToReportes(): void {
        this._echoService.listenToReportes((data) => {
            console.log('📡 Nuevo reporte recibido:', data)
            this.getReportes()
        })
    }
}
