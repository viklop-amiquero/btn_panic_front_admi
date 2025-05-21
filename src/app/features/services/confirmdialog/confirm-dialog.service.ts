import { Injectable } from '@angular/core'
import { ConfirmDialog } from '../../models/interfaces/confirm-dialog'
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component'
import { MatDialog } from '@angular/material/dialog'
import { Observable } from 'rxjs'

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
}
