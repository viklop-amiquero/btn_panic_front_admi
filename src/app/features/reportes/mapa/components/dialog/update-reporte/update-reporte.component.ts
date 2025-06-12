import { Component, Inject } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { SnackbarService } from '../../../../../../shared/services/snackbar/snackbar.service'
import { ReporteService } from '../../../../reporte/services/reporte.service'
import { ReporteShow } from '../../../../models/dtos/reporte-show.dto'

@Component({
    selector: 'app-update-reporte',
    standalone: false,
    templateUrl: './update-reporte.component.html',
    styleUrl: './update-reporte.component.css',
})
export class UpdateReporteComponent {
    constructor(
        public dialogRef: MatDialogRef<UpdateReporteComponent>,
        @Inject(MAT_DIALOG_DATA)
        public data: ReporteShow,
        private _reporteService: ReporteService,
        private _snackBarService: SnackbarService
    ) {}
    onSubmit(id: number) {
        // console.log(id)
        this._reporteService.updateReporte(id).subscribe({
            next: ({ message }) => {
                this._snackBarService.success(message, 3000)
            },
            error: (err) => {
                // console.log(err)
            },
        })
    }
}
