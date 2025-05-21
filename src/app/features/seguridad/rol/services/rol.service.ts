import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { TokenService } from '../../../../shared/services/token/token.service'
import { environment } from '../../../../../environments/environment'
import { HeaderHttpService } from '../../../services/headerHttp/header-http.service'
import { Observable, catchError, throwError } from 'rxjs'
import { RoleMenuListDto } from '../models/dtos/role-menu-list.dto'
import { RolCreateRequest } from '../models/requests/rol-create.request'
import { RolCreateResponse } from '../models/responses/rol-create.response'
import { RoleMenuByIdListdDto } from '../models/dtos/role-menu-by-id-list.dto'
import { RolUpdateResponse } from '../models/responses/rol-update.response'
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

    getRoleMenuById(id: number): Observable<RoleMenuByIdListdDto> {
        return this._http.get<RoleMenuByIdListdDto>(
            `${this._apiUrl}/api/rol/${id}`,
            {
                headers: this._headerHttpService.getHeaders(
                    this._tokenService.getToken()
                ),
            }
        )
    }

    updateRole(
        id: number,
        data: RolCreateRequest
    ): Observable<RolUpdateResponse> {
        return this._http.put<RolUpdateResponse>(
            `${this._apiUrl}/api/rol/${id}`,
            data,
            {
                headers: this._headerHttpService.getHeaders(
                    this._tokenService.getToken()
                ),
            }
        )
    }
}
