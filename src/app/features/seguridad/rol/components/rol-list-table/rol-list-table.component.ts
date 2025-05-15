import { Component, OnInit, ViewChild } from '@angular/core'
import { RolService } from '../../services/rol.service'
import { MatPaginator } from '@angular/material/paginator'
import { RoleMenuMapper } from '../../models/vm/RoleMenu.mapper'
import { RoleMenuViewModel } from '../../models/vm/role-menu-view-model.vm'

@Component({
    selector: 'rol-list-table',
    standalone: false,
    templateUrl: './rol-list-table.component.html',
    styleUrl: './rol-list-table.component.css',
})
export class RolListTableComponent implements OnInit {
    displayedColumns: string[] = ['id', 'rol', 'menu', 'permiso']

    viewModel: RoleMenuViewModel[] = []

    constructor(private _roleService: RolService) {}

    ngOnInit() {
        this.getRolMenu()
    }

    getRolMenu() {
        this._roleService.getRolMenu().subscribe(({ data }) => {
            this.viewModel = RoleMenuMapper(data)
            // this.rolMenuList = data
            // console.log(data)
            // const viewModel = RoleMenuMapper(data)
            // console.log(viewModel)
            // this.dataSource = new MatTableDataSource<RoleMenu>(data)
        })
    }
}
