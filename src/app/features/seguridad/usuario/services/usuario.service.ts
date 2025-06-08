import { Injectable } from '@angular/core'
import { environment } from '../../../../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { TokenService } from '../../../../shared/services/token/token.service'
import { HeaderHttpService } from '../../../services/headerHttp/header-http.service'
import { Observable } from 'rxjs'
import { UsuarioPagedDto } from '../models/dtos/usuario-paged.dto'
import { UsuarioFormDto } from '../models/dtos/usuario-form.dto'
import { UsuarioFormRequest } from '../models/requests/usuario-form.request'
import { UsuarioFormResponse } from '../models/responses/usuario-form.response'
import { MessageResponse } from '../../../models/interfaces/message.response'

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

    getUsuarioById(id: number): Observable<UsuarioFormDto> {
        return this._http.get<UsuarioFormDto>(
            `${this._apiUrl}/api/user/${id}`,
            {
                headers: this._headerHttpService.getHeaders(
                    this._tokenService.getToken()
                ),
            }
        )
    }

    createUsuario(data: UsuarioFormRequest): Observable<UsuarioFormResponse> {
        return this._http.post<UsuarioFormResponse>(
            `${this._apiUrl}/api/user`,
            data,
            {
                headers: this._headerHttpService.getHeaders(
                    this._tokenService.getToken()
                ),
            }
        )
    }

    updateUsuario(
        id: number,
        data: UsuarioFormRequest
    ): Observable<UsuarioFormResponse> {
        return this._http.put<UsuarioFormResponse>(
            `${this._apiUrl}/api/user/${id}`,
            data,
            {
                headers: this._headerHttpService.getHeaders(
                    this._tokenService.getToken()
                ),
            }
        )
    }

    deleteUsuario(id: number): Observable<MessageResponse> {
        return this._http.delete<MessageResponse>(
            `${this._apiUrl}/api/user/${id}`,
            {
                headers: this._headerHttpService.getHeaders(
                    this._tokenService.getToken()
                ),
            }
        )
    }
}
