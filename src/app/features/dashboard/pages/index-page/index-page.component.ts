import { Component } from '@angular/core'

@Component({
    selector: 'app-index-page',
    standalone: false,
    templateUrl: './index-page.component.html',
    styleUrl: './index-page.component.css',
})
export class IndexPageComponent {
    public breadcrumbs = 'usuarios'
    public title = 'usuarios'
    showButton = true
    buttonLabel = 'Nuevo'
}
