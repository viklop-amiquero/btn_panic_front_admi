import { Injectable } from '@angular/core'
import { environment } from '../../../../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { TokenService } from '../../../../shared/services/token/token.service'
import { HeaderTokenService } from '../../../services/header/header-token.service'

@Injectable({
    providedIn: 'root',
})
export class RolService {
    private _apiUrl: string = environment.apiUrl

    constructor(
        private _http: HttpClient,
        private _tokenService: TokenService,
        private _headerTokenService: HeaderTokenService
    ) {}

    createRol() {}
}
