import { Injectable } from '@angular/core'
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar'

@Injectable({
    providedIn: 'root',
})
export class SnackbarService {
    constructor(private _snackBar: MatSnackBar) {}

    private config(duration: number, panelClass: string[]): MatSnackBarConfig {
        return {
            duration: duration,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass,
        }
    }

    success(message: string, duration: number = 3000) {
        this._snackBar.open(
            message,
            'Cerrar',
            // this.config(duration, ['success-snackbar'])
            this.config(duration, ['success-snackbar'])
        )
    }

    error(message: string, duration: number = 3000) {
        this._snackBar.open(
            message,
            'Cerrar',
            this.config(duration, ['error-snackbar'])
        )
    }

    warning(message: string, duration: number = 3000) {
        this._snackBar.open(
            message,
            'Cerrar',
            this.config(duration, ['warning-snackbar'])
        )
    }
}
