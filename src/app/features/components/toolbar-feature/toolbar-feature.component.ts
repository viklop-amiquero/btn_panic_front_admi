import { Component, EventEmitter, Output } from '@angular/core'

@Component({
    selector: 'toolbar-feature',
    standalone: false,
    templateUrl: './toolbar-feature.component.html',
    styleUrl: './toolbar-feature.component.css',
})
export class ToolbarFeatureComponent {
    @Output()
    public toggleEmit = new EventEmitter()

    onClick() {
        this.toggleEmit.emit()
    }
}
