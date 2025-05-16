import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { HeaderLayoutService } from '../../services/headerLayout/header-layout.service'
import { HeaderLayoutConfig } from '../../models/interfaces/header-layout-config'

@Component({
    selector: 'app-header-layout',
    standalone: false,
    templateUrl: './header-layout.component.html',
    styleUrl: './header-layout.component.css',
})
export class HeaderLayoutComponent implements OnInit, OnDestroy {
    config: HeaderLayoutConfig = {
        breadcrumbs: [],
        title: '',
        showButton: false,
        buttonLabel: '',
        buttonIcon: '',
        buttonColor: 'primary',
        link: '',
    }

    private sub!: Subscription

    constructor(
        private _headerLayoutService: HeaderLayoutService,
        private _cdr: ChangeDetectorRef
    ) {}

    ngOnInit() {
        this.sub = this._headerLayoutService.hLayoutConfig.subscribe(
            (config) => {
                this.config = config
                this._cdr.detectChanges()
            }
        )
    }

    ngOnDestroy() {
        this.sub.unsubscribe()
    }
}
