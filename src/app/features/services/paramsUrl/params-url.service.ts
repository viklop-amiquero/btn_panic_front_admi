import { Injectable } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable, map, tap } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class ParamsUrlService {
    constructor() {}

    getIdParam(route: ActivatedRoute): Observable<number> {
        return route.paramMap.pipe(map((params) => +params.get('id')!))
    }
}
