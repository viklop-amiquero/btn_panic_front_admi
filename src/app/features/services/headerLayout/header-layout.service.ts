import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { HeaderLayoutConfig } from '../../models/interfaces/header-layout-config'

@Injectable({
    providedIn: 'root',
})
export class HeaderLayoutService {
    constructor() {}

    private headerLayoutConfig = new BehaviorSubject<HeaderLayoutConfig>({
        breadcrumbs: [],
        title: '',
        showButton: false,
    })

    hLayoutConfig = this.headerLayoutConfig.asObservable()

    setHeader(config: HeaderLayoutConfig) {
        this.headerLayoutConfig.next(config)
    }
}
