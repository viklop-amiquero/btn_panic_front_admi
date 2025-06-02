import { Component, OnInit } from '@angular/core'
import { HeaderLayoutService } from '../../../../services/headerLayout/header-layout.service'
import { RoutesName } from '../../../../../shared/routes/routes'
import { SpanForm } from '../../../rol/models/interfaces/span-form'

@Component({
    selector: 'app-edit-usuario-page',
    standalone: false,
    templateUrl: './edit-usuario-page.component.html',
    styleUrl: './edit-usuario-page.component.css',
})
export class EditUsuarioPageComponent implements OnInit {
    constructor(private _headerLayoutService: HeaderLayoutService) {}
    title = 'Editar usuario :'
    span?: SpanForm
    rn = RoutesName

    ngOnInit(): void {
        this.setHeaderLayoutService()
    }

    setHeaderLayoutService(): void {
        this._headerLayoutService.setHeader({
            breadcrumbs: [
                { label: 'Usuario', link: '' },
                { label: 'Editar', link: '' },
            ],
            title: 'Usuarios',
            showButton: false,
            buttonLabel: 'Editar Rol',
            buttonIcon: 'add',
            link: '',
        })
    }
}
