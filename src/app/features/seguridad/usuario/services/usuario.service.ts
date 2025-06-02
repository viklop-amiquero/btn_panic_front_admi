import { Injectable } from '@angular/core'
import { environment } from '../../../../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { TokenService } from '../../../../shared/services/token/token.service'
import { HeaderHttpService } from '../../../services/headerHttp/header-http.service'
import { Observable } from 'rxjs'
import { UsuarioPagedDto } from '../models/dtos/usuario-paged.dto'
import { UsuarioCreateRequest } from '../models/requests/usuario-create.request'
import { UsuarioCreateResponse } from '../models/responses/usuario-create.response'
import { UsuarioListDto } from '../models/dtos/usuario-show.dto'

@Injectable({
    providedIn: 'root',
})
export class UsuarioService {
    private _apiUrl: string = environment.apiUrl

    constructor(
        private _http: HttpClient,
        private _tokenService: TokenService,
        private _headerHttpService: HeaderHttpService
    ) {}

    getUsuarios(page: number = 1): Observable<UsuarioPagedDto> {
        return this._http.get<UsuarioPagedDto>(
            `${this._apiUrl}/api/user?page=${page}`,
            {
                headers: this._headerHttpService.getHeaders(
                    this._tokenService.getToken()
                ),
            }
        )
    }

    getUsuarioById(id: number): Observable<UsuarioListDto> {
        return this._http.get<UsuarioListDto>(
            `${this._apiUrl}/api/user/${id}`,
            {
                headers: this._headerHttpService.getHeaders(
                    this._tokenService.getToken()
                ),
            }
        )
    }

    createUsuario(
        data: UsuarioCreateRequest
    ): Observable<UsuarioCreateResponse> {
        return this._http.post<UsuarioCreateResponse>(
            `${this._apiUrl}/api/user`,
            data,
            {
                headers: this._headerHttpService.getHeaders(
                    this._tokenService.getToken()
                ),
            }
        )
    }
}
