import { Component, OnInit, ViewChild } from '@angular/core'
import { MatPaginator, PageEvent } from '@angular/material/paginator'

import { UsuarioService } from '../../services/usuario.service'
import { SnackbarService } from '../../../../../shared/services/snackbar/snackbar.service'
import { UsuarioDto } from '../../models/dtos/usuario-paged.dto'
import { RoutesName } from '../../../../../shared/routes/routes'
import { ConfirmDialogService } from '../../../../services/confirmdialog/confirm-dialog.service'
import { PasswordService } from '../../../../services/password/password.service'
@Component({
    selector: 'usuario-list',
    standalone: false,
    templateUrl: './usuario-list.component.html',
    styleUrl: './usuario-list.component.css',
})
export class UsuarioListComponent implements OnInit {
    displayedColumns: string[] = [
        'no',
        'password_attemps',
        'username',
        'rol',
        'nombre',
        'apellido',
        'dni',
        'digito_verificador',
        'domicilio',
        'telefono',
        'usuario_crea',
        'usuario_modifica',
        'created_at',
        'updated_at',
        'estado',
        'acciones',
    ]

    datasource: UsuarioDto[] = []
    totalItems = 0
    pageSize = 5
    currentPage = 1

    r_user = RoutesName.USUARIO.index.route
    r_userEdit = RoutesName.USUARIO.edit.route

    constructor(
        private _usuarioService: UsuarioService,
        private _snackBarService: SnackbarService,
        private _confirmDialogService: ConfirmDialogService,
        private _passwordService: PasswordService
    ) {}

    @ViewChild(MatPaginator) paginator!: MatPaginator

    ngOnInit() {
        this.getUsuarios(this.currentPage)
    }

    getUsuarios(page: number) {
        this._usuarioService.getUsuarios(page).subscribe({
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

    onPageChange(event: PageEvent) {
        this.getUsuarios(event.pageIndex + 1)
    }

    onDelete(id: number): void {}

    passwordReset(id: number): void {
        this._confirmDialogService
            .confirm({
                title: 'Resetear contraseña',
                message: '¿Estás seguro de que deseas resetear la contraseña.?',
                confirmText: 'Sí, Resetear.',
                cancelText: 'Cancelar',
            })
            .subscribe((confirmed) => {
                if (confirmed) {
                    this._passwordService.resetPassword(id).subscribe({
                        next: ({ message }) => {
                            this._snackBarService.success(message)
                        },
                        error: () => {
                            this._snackBarService.error(
                                'Ocurrió un error, por favor inténtelo más tarde.'
                            )
                        },
                    })
                }
            })
    }
}
