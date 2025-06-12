import { Component, OnInit } from '@angular/core'
import { RolService } from '../../services/rol.service'
import { RoleMenuMapper } from '../../models/vm/RoleMenu.mapper'
import { RoleMenuViewModel } from '../../models/vm/role-menu-view-model.vm'
import { RoutesName } from '../../../../../shared/routes/routes'
import { ConfirmDialogService } from '../../../../services/confirmdialog/confirm-dialog.service'
import { SnackbarService } from '../../../../../shared/services/snackbar/snackbar.service'
import { Router } from '@angular/router'
import { PermissionService } from '../../../../services/permission/permission.service'
import { forkJoin } from 'rxjs'

@Component({
    selector: 'rol-list-table',
    standalone: false,
    templateUrl: './rol-list-table.component.html',
    styleUrl: './rol-list-table.component.css',
})
export class RolListTableComponent implements OnInit {
    displayedColumns: string[] = ['id', 'rol', 'menu', 'permiso']
    listRolMenu: RoleMenuViewModel[] = []
    r_rol = RoutesName.ROL.index.route
    r_rolEdit = RoutesName.ROL.edit.route
    showAcciones!: boolean
    permiso_id!: number

    constructor(
        private _roleService: RolService,
        private _confirmDialogService: ConfirmDialogService,
        private _snackBarService: SnackbarService,
        private _router: Router,
        private _permissionService: PermissionService
    ) {}

    ngOnInit() {
        forkJoin({
            roleMenu: this._roleService.getRolMenu(),
        }).subscribe({
            next: ({ roleMenu }) => {
                this.listRolMenu = RoleMenuMapper(roleMenu.data)
                this.getPermission()
            },
            error: (err) => {},
        })
        // this.getRolMenu()
    }

    getPermission() {
        this.permiso_id =
            this._permissionService.filterMenu('roles')[0].permiso_id
    }

    // getRolMenu() {
    //     this._roleService.getRolMenu().subscribe(({ data }) => {
    //         this.listRolMenu = RoleMenuMapper(data)
    //     })
    // }

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
                            this.listRolMenu = this.listRolMenu.filter(
                                (rol) => rol.id_rol !== id
                            )
                            // this._router.navigate([RoutesName.ROL.index.route])
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
