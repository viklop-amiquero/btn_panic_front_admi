import { Component, OnInit, ViewChild } from '@angular/core'
import { MatPaginator, PageEvent } from '@angular/material/paginator'

import { UsuarioService } from '../../services/usuario.service'
import { SnackbarService } from '../../../../../shared/services/snackbar/snackbar.service'
import { UsuarioDto } from '../../models/dtos/usuario-paged.dto'
@Component({
    selector: 'usuario-list',
    standalone: false,
    templateUrl: './usuario-list.component.html',
    styleUrl: './usuario-list.component.css',
})
export class UsuarioListComponent implements OnInit {
    displayedColumns: string[] = [
        'no',
        'username',
        'rol',
        'nombre',
        'apellido',
        'dni',
        'digito_verificador',
        'domicilio',
        'telefono',
        'estado',
    ]

    // datasource!: MatTableDataSource<UsuarioDto>
    datasource: UsuarioDto[] = []
    totalItems = 0
    pageSize = 5
    currentPage = 1
    constructor(
        private _usuarioService: UsuarioService,
        private _snackBarService: SnackbarService
    ) {}

    @ViewChild(MatPaginator) paginator!: MatPaginator

    ngOnInit() {
        this.getUsuarios(this.currentPage)
    }

    getUsuarios(page: number) {
        this._usuarioService.getUsuarios(page).subscribe({
            next: (resp) => {
                console.log(resp)

                this.datasource = resp.data
                this.totalItems = resp.meta.total
                this.pageSize = resp.meta.per_page
                this.currentPage = resp.meta.current_page

                // this.dataSource.paginator = this.paginator
                // this.datasource.paginator = this.paginator
            },
            error: (err) => {
                this._snackBarService.error(
                    'Ocurió un error, por favor inténtelo más tarde'
                )
            },
        })
    }

    onPageChange(event: PageEvent) {
        this.getUsuarios(event.pageIndex + 1) // Angular Material usa 0-index, tu API usa 1-index
    }
}
