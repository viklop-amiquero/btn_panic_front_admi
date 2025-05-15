import { Component, Input } from '@angular/core'

@Component({
    selector: 'header-feature',
    standalone: false,
    templateUrl: './header-feature.component.html',
    styleUrl: './header-feature.component.css',
})
export class HeaderFeatureComponent {
    @Input() breadcrumbs: string[] = []
    @Input() title = ''
    @Input() buttonLabel = ''
    @Input() buttonColor:
        | 'primary'
        | 'accent'
        | 'warn'
        | 'basic'
        | 'success'
        | 'orange' = 'primary'
    @Input() buttonIcon?: string
    @Input() showButton = false
    @Input() link = ''
}
