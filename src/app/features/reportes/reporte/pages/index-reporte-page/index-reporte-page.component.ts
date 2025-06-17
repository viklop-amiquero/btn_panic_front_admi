import { Component, OnInit } from '@angular/core'
import { RoutesName } from '../../../../../shared/routes/routes'
import { HeaderLayoutService } from '../../../../services/headerLayout/header-layout.service'

@Component({
    selector: 'app-index-reporte-page',
    standalone: false,
    templateUrl: './index-reporte-page.component.html',
    styleUrl: './index-reporte-page.component.css',
})
export class IndexReportePageComponent implements OnInit {
    rn = RoutesName

    constructor(private _headerLayoutService: HeaderLayoutService) {}

    ngOnInit(): void {
        this._headerLayoutService.setHeader({
            breadcrumbs: [
                { label: 'Reporte', link: '' },
                { label: 'Lista', link: '' },
            ],
            title: 'Reportes',
            showButton: false,
            buttonLabel: 'Nuevo usuario',
            buttonIcon: 'add',
            link: '',
        })
    }
}
