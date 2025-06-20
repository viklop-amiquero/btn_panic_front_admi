import { Component, OnInit, ViewChild } from '@angular/core'
import { CategoriaService } from '../../services/categoria.service'
import { SnackbarService } from '../../../../../shared/services/snackbar/snackbar.service'
import { ConfirmDialogService } from '../../../../services/confirmdialog/confirm-dialog.service'
import { PermissionService } from '../../../../services/permission/permission.service'
import { MatPaginator, PageEvent } from '@angular/material/paginator'
import { RoutesName as rn } from '../../../../../shared/routes/routes'
import { CategoriaDto } from '../../models/dtos/categoria.dto'
@Component({
    selector: 'categoria-list',
    standalone: false,
    templateUrl: './categoria-list.component.html',
    styleUrl: './categoria-list.component.css',
})
export class CategoriaListComponent implements OnInit {
    displayedColumns: string[] = ['no', 'nombre', 'descripcion', 'estado']
    permiso_id!: number
    datasource: CategoriaDto[] = []
    totalItems = 0
    pageSize = 5
    currentPage = 1
    r_categoria = rn.CATEGORIA.index.route
    r_categoriaEdit = rn.CATEGORIA.edit.route

    @ViewChild(MatPaginator) paginator!: MatPaginator

    constructor(
        private _categoriaService: CategoriaService,
        private _snackBarService: SnackbarService,
        private _confirmDialogService: ConfirmDialogService,
        private _permissionService: PermissionService
    ) {}

    ngOnInit(): void {
        this.getPermission()
        this.getCategorias(this.currentPage)
    }

    getPermission() {
        this.permiso_id =
            this._permissionService.filterMenu('usuarios')[0].permiso_id
        if (this.permiso_id !== 2) {
            this.displayedColumns.push('acciones')
        }
    }

    getCategorias(page: number): void {
        this._categoriaService.getCategorias(page).subscribe({
            next: (resp) => {
                this.datasource = resp.data
                this.totalItems = resp.meta.total
                this.pageSize = resp.meta.per_page
                this.currentPage = resp.meta.current_page
            },
            error: (err) => {
                console.log(err)
            },
        })
    }

    onDeleteCategoria(id: number) {}

    onPageChange(event: PageEvent) {
        this.getCategorias(event.pageIndex + 1)
    }
}
