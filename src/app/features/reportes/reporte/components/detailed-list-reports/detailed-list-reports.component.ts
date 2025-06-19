import { Component, OnInit, ViewChild } from '@angular/core'
import { ReporteDto } from '../../../models/dtos/reporte-paged.dto'
import { ReporteService } from '../../services/reporte.service'
import { SnackbarService } from '../../../../../shared/services/snackbar/snackbar.service'
import { ConfirmDialogService } from '../../../../services/confirmdialog/confirm-dialog.service'
import { MatPaginator } from '@angular/material/paginator'
import { environment } from '../../../../../../environments/environment'
@Component({
    selector: 'list-reports-detailed',
    standalone: false,
    templateUrl: './detailed-list-reports.component.html',
    styleUrl: './detailed-list-reports.component.css',
})
export class DetailedListReportsComponent implements OnInit {
    displayedColumns: string[] = [
        'no',
        'imagen',
        // 'descripcion',
        'categoria',
        'direccion',
        'cliente',
        'latitud',
        'longitud',
        'telefono',
        'usuario_crea',
        'usuario_modifica',
        'created_at',
        'updated_at',
        'estado',
        'acciones',
    ]

    datasource: ReporteDto[] = []
    totalItems = 0
    pageSize = 5
    currentPage = 1

    constructor(
        private _reporteService: ReporteService,
        private _snackBarService: SnackbarService,
        private _confirmDialogService: ConfirmDialogService
    ) {}

    @ViewChild(MatPaginator) paginator!: MatPaginator

    ngOnInit(): void {
        this.getReportes(this.currentPage)
        // this._reporteService.getReportes(this.currentPage)
    }

    getReportes(page: number) {
        this._reporteService.getReportes(page).subscribe({
            next: (resp) => {
                this.datasource = resp.data
                this.totalItems = resp.meta.total
                this.pageSize = resp.meta.per_page
                this.currentPage = resp.meta.current_page
            },
            error: (err) => {
                this._snackBarService.error(
                    'Ocurió un error, por favor inténtelo más tarde'
                )
            },
        })
    }

    onDelete(id: number) {
        // console.log(id)
        this._confirmDialogService
            .confirm({
                title: 'Eliminar reporte.',
                message: '¿Estás seguro de que deseas eliminar el reporte.?',
                confirmText: 'Sí, eliminar.',
                cancelText: 'Cancelar',
            })
            .subscribe((confirmed) => {
                if (confirmed) {
                    this._reporteService.deleteReporte(id).subscribe({
                        next: ({ message }) => {
                            this._snackBarService.success(message, 3000)
                            this.datasource.forEach((reporte) => {
                                if (reporte.id === id) {
                                    reporte.estado = '0'
                                }
                            })
                        },
                        error: (err) => {
                            this._snackBarService.error(
                                'Ocurrió un error, por favor inténtelo más tarde.'
                            )
                        },
                    })
                }
            })
    }

    getImagenUrl(imagen: string): string {
        return `${environment.apiUrl}/storage/${imagen}`
    }
}
