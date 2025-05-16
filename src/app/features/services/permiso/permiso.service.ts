import { Injectable } from '@angular/core'
import { environment } from '../../../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { TokenService } from '../../../shared/services/token/token.service'
import { HeaderHttpService } from '../headerHttp/header-http.service'
import { Observable, catchError, throwError } from 'rxjs'
import { PermisoListDto } from '../../models/dtos/permiso-list.dto'

@Injectable({
    providedIn: 'root',
})
export class PermisoService {
    private _apiUrl: string = environment.apiUrl

    constructor(
        private _http: HttpClient,
        private _tokenService: TokenService,
        private _headerHttpService: HeaderHttpService
    ) {}

    getPermiso(): Observable<PermisoListDto> {
        return this._http
            .get<PermisoListDto>(`${this._apiUrl}/api/permiso`, {
                headers: this._headerHttpService.getHeaders(
                    this._tokenService.getToken()
                ),
            })
            .pipe(
                catchError((error) => {
                    return throwError(() => error)
                })
            )
    }
}
