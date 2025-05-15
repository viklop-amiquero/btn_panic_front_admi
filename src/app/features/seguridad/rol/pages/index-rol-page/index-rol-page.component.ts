import { Component } from '@angular/core'
import { RoutesName } from '../../../../../shared/routes/routes'
@Component({
    selector: 'app-index-rol-page',
    standalone: false,
    templateUrl: './index-rol-page.component.html',
    styleUrl: './index-rol-page.component.css',
})
export class IndexRolPageComponent {
    rn = RoutesName
}
