import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { TokenService } from '../../../../shared/services/token/token.service'
import { environment } from '../../../../../environments/environment'
import { HeaderHttpService } from '../../../services/headerHttp/header-http.service'
@Injectable({
    providedIn: 'root',
})
export class RolService {
    private _apiUrl: string = environment.apiUrl

    constructor(
        private _http: HttpClient,
        private _tokenService: TokenService,
        private _headerHttp: HeaderHttpService
    ) {}
}
