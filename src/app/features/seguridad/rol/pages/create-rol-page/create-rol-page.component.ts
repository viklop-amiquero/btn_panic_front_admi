import { Component, OnInit } from '@angular/core'
import { RoutesName } from '../../../../../shared/routes/routes'
import { HeaderLayoutService } from '../../../../services/headerLayout/header-layout.service'
import { PermisoService } from '../../../../services/permiso/permiso.service'

@Component({
    selector: 'app-create-rol-page',
    standalone: false,
    templateUrl: './create-rol-page.component.html',
    styleUrl: './create-rol-page.component.css',
})
export class CreateRolPageComponent implements OnInit {
    rn = RoutesName

    constructor(
        private _headerLayoutService: HeaderLayoutService,
        private _permisoService: PermisoService
    ) {}

    ngOnInit(): void {
        this._headerLayoutService.setHeader({
            breadcrumbs: [
                { label: 'Rol', link: `${this.rn.ROL.index.route}` },
                { label: 'Crear', link: `${this.rn.ROL.create.route}` },
            ],
            title: 'Roles',
            showButton: false,
        })

        this.getPermiso()
    }

    getPermiso() {
        this._permisoService.getPermiso().subscribe((resp) => {
            console.log(resp.data)
        })
    }
}
