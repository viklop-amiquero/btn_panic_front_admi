import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core'
import { RolService } from '../../services/rol.service'
import { RoleMenu } from '../../models/dtos/role-menu-list.dto'
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'
import { RoleMenuMapper } from '../../models/vm/RoleMenu.mapper'
import { RoleMenuViewModel } from '../../models/vm/role-menu-view-model.vm'

@Component({
    selector: 'rol-list-table',
    standalone: false,
    templateUrl: './rol-list-table.component.html',
    styleUrl: './rol-list-table.component.css',
})
export class RolListTableComponent implements OnInit {
    displayedColumns: string[] = ['id', 'rol', 'menu', 'permiso', 'acciones']
    // dataSource: MatTableDataSource<RoleMenu> =
    //     new MatTableDataSource<RoleMenu>()

    viewModel: RoleMenuViewModel[] = []

    constructor(private _roleService: RolService) {}

    @ViewChild(MatPaginator) paginator!: MatPaginator

    ngOnInit() {
        this.getRolMenu()
    }

    // ngAfterViewInit() {
    //     this.dataSource.paginator = this.paginator
    // }

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
