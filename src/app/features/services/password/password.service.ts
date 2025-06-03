import { Injectable } from '@angular/core'
import { environment } from '../../../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { TokenService } from '../../../shared/services/token/token.service'
import { HeaderHttpService } from '../headerHttp/header-http.service'
import { Observable } from 'rxjs'
import { MessageResponse } from '../../models/interfaces/message.response'

@Injectable({
    providedIn: 'root',
})
export class PasswordService {
    private _apiUrl: string = environment.apiUrl

    constructor(
        private _http: HttpClient,
        private _tokenService: TokenService,
        private _headerHttpService: HeaderHttpService
    ) {}

    resetPassword(id: number): Observable<MessageResponse> {
        return this._http.post<MessageResponse>(
            `${this._apiUrl}/api/password-reset/${id}`,
            {},
            {
                headers: this._headerHttpService.getHeaders(
                    this._tokenService.getToken()
                ),
            }
        )
    }
}
