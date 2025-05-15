import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { TokenService } from '../../../../shared/services/token/token.service'
import { environment } from '../../../../../environments/environment'
import { HeaderHttpService } from '../../../services/headerHttp/header-http.service'
import { Observable, catchError, throwError } from 'rxjs'
import { RoleMenuListDto } from '../models/dtos/role-menu-list.dto'
@Injectable({
    providedIn: 'root',
})
export class RolService {
    private _apiUrl: string = environment.apiUrl

    constructor(
        private _http: HttpClient,
        private _tokenService: TokenService,
        private _headerHttpService: HeaderHttpService
    ) {}

    getRolMenu(): Observable<RoleMenuListDto> {
        return this._http
            .get<RoleMenuListDto>(`${this._apiUrl}/api/rol`, {
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
