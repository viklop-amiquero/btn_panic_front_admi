import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { TokenService } from '../../../../shared/services/token/token.service'
import { environment } from '../../../../../environments/environment'
import { HeaderHttpService } from '../../../services/headerHttp/header-http.service'
import { Observable, catchError, throwError } from 'rxjs'
import { RoleMenuListDto } from '../models/dtos/role-menu-list.dto'
import { RolCreateRequest } from '../models/requests/rol-create.request'
import { RolCreateResponse } from '../models/responses/rol-create.response'
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

    createRol(data: RolCreateRequest): Observable<RolCreateResponse> {
        return this._http.post<RolCreateResponse>(
            `${this._apiUrl}/api/rol`,
            data,
            {
                headers: this._headerHttpService.getHeaders(
                    this._tokenService.getToken()
                ),
            }
        )
    }
}
