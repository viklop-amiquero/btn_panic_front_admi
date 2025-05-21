import { Component, Inject } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { ConfirmDialog } from '../../models/interfaces/confirm-dialog'

@Component({
    selector: 'app-confirm-dialog',
    standalone: false,
    templateUrl: './confirm-dialog.component.html',
    styleUrl: './confirm-dialog.component.css',
})
export class ConfirmDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<ConfirmDialogComponent>,
        @Inject(MAT_DIALOG_DATA)
        public data: ConfirmDialog
    ) {}

    onConfirm(): void {
        this.dialogRef.close(true)
    }

    onCancel(): void {
        this.dialogRef.close(false)
    }
}
