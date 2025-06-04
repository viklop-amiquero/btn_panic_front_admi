import { Component } from '@angular/core'
import { RoutesName } from '../../../../../shared/routes/routes'
import { HeaderLayoutService } from '../../../../services/headerLayout/header-layout.service'

@Component({
    selector: 'app-index-usuario-page',
    standalone: false,
    templateUrl: './index-usuario-page.component.html',
    styleUrl: './index-usuario-page.component.css',
})
export class IndexUsuarioPageComponent {
    rn = RoutesName

    constructor(private _headerLayoutService: HeaderLayoutService) {}

    ngOnInit(): void {
        this._headerLayoutService.setHeader({
            breadcrumbs: [
                { label: 'Usuario', link: '' },
                { label: 'Lista', link: `${this.rn.USUARIO.index.route}` },
            ],
            title: 'Usuarios',
            showButton: true,
            buttonLabel: 'Nuevo usuario',
            buttonIcon: 'add',
            link: `${this.rn.USUARIO.create.route}`,
        })
    }
}
