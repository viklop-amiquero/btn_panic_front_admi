import { Component, OnInit, ViewChild } from '@angular/core'
import { RolService } from '../../services/rol.service'
import { MatPaginator } from '@angular/material/paginator'
import { RoleMenuMapper } from '../../models/vm/RoleMenu.mapper'
import { RoleMenuViewModel } from '../../models/vm/role-menu-view-model.vm'
import { RoutesName } from '../../../../../shared/routes/routes'

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

    constructor(private _roleService: RolService) {}

    ngOnInit() {
        this.getRolMenu()
    }

    getRolMenu() {
        this._roleService.getRolMenu().subscribe(({ data }) => {
            this.viewModel = RoleMenuMapper(data)
        })
    }
}
