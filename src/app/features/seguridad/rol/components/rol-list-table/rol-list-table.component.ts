import { Component, OnInit } from '@angular/core'
import { RolService } from '../../services/rol.service'
import { RoleMenuMapper } from '../../models/vm/RoleMenu.mapper'
import { RoleMenuViewModel } from '../../models/vm/role-menu-view-model.vm'
import { RoutesName } from '../../../../../shared/routes/routes'
import { ConfirmDialogService } from '../../../../services/confirmdialog/confirm-dialog.service'
import { SnackbarService } from '../../../../../shared/services/snackbar/snackbar.service'
import { Router } from '@angular/router'

@Component({
    selector: 'rol-list-table',
    standalone: false,
    templateUrl: './rol-list-table.component.html',
    styleUrl: './rol-list-table.component.css',
})
export class RolListTableComponent implements OnInit {
    displayedColumns: string[] = ['id', 'rol', 'menu', 'permiso']
    viewModel: RoleMenuViewModel[] = []

    r_rol = RoutesName.ROL.index.route
    r_rolEdit = RoutesName.ROL.edit.route

    constructor(
        private _roleService: RolService,
        private _confirmDialogService: ConfirmDialogService,
        private _snackBarService: SnackbarService,
        private _router: Router
    ) {}

    ngOnInit() {
        this.getRolMenu()
    }

    getRolMenu() {
        this._roleService.getRolMenu().subscribe(({ data }) => {
            this.viewModel = RoleMenuMapper(data)
        })
    }

    onDeleteRol(id: number): void {
        this._confirmDialogService
            .confirm({
                title: 'Eliminar rol',
                message: '¿Estás seguro de que deseas eliminar este rol?',
                confirmText: 'Sí, eliminar',
                cancelText: 'Cancelar',
            })
            .subscribe((confirmed) => {
                if (confirmed) {
                    // console.log('rol eliminado', id)
                    this._roleService.deleteRole(id).subscribe({
                        next: ({ message }) => {
                            this._snackBarService.success(message)
                            this._router.navigate([RoutesName.ROL.index.route])
                        },
                        error: () => {
                            this._snackBarService.error(
                                'Error al eliminar el rol'
                            )
                        },
                    })
                }
            })
    }
}
