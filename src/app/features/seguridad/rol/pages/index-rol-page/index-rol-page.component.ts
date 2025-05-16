import { Component, OnInit } from '@angular/core'
import { RoutesName } from '../../../../../shared/routes/routes'
import { HeaderLayoutService } from '../../../../services/headerLayout/header-layout.service'
@Component({
    selector: 'app-index-rol-page',
    standalone: false,
    templateUrl: './index-rol-page.component.html',
    styleUrl: './index-rol-page.component.css',
})
export class IndexRolPageComponent implements OnInit {
    rn = RoutesName

    constructor(private _headerLayoutService: HeaderLayoutService) {}

    ngOnInit(): void {
        this._headerLayoutService.setHeader({
            breadcrumbs: [
                { label: 'Rol', link: `${this.rn.ROL.index.route}` },
                { label: 'Lista', link: `${this.rn.ROL.index.route}` },
            ],
            title: 'Roles',
            showButton: true,
            buttonLabel: 'Nuevo Rol',
            buttonIcon: 'add',
            link: `${this.rn.ROL.create.route}`,
        })
    }
}
