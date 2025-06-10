import { Injectable } from '@angular/core'
import { ConfirmDialog } from '../../models/interfaces/confirm-dialog'
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component'
import { MatDialog } from '@angular/material/dialog'
import { Observable } from 'rxjs'
import { UpdateReporteComponent } from '../../reporte/components/dialog/update-reporte/update-reporte.component'
import { ReporteShow } from '../../reporte/models/dtos/reporte-show.dto'

@Injectable({
    providedIn: 'root',
})
export class ConfirmDialogService {
    constructor(private dialog: MatDialog) {}

    confirm(data: ConfirmDialog): Observable<boolean> {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            width: '350px',
            data,
        })

        return dialogRef.afterClosed()
    }

    updateReporte(data: ReporteShow): Observable<boolean> {
        const dialogRef = this.dialog.open(UpdateReporteComponent, {
            data,
        })

        return dialogRef.afterClosed()
    }
}
