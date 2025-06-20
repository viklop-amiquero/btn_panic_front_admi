import { Injectable } from '@angular/core'
import { environment } from '../../../../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { TokenService } from '../../../../shared/services/token/token.service'
import { HeaderHttpService } from '../../../services/headerHttp/header-http.service'
import { Observable } from 'rxjs'
import { CategoriaPagedDto } from '../models/dtos/categoria-paged.dto'

@Injectable({
    providedIn: 'root',
})
export class CategoriaService {
    private _apiUrl: string = environment.apiUrl

    constructor(
        private _http: HttpClient,
        private _tokenService: TokenService,
        private _headerHttpService: HeaderHttpService
    ) {}

    getCategorias(page: number = 1): Observable<CategoriaPagedDto> {
        return this._http.get<CategoriaPagedDto>(
            `${this._apiUrl}/api/categoria?page=${page}`,
            {
                headers: this._headerHttpService.getHeaders(
                    this._tokenService.getToken()
                ),
            }
        )
    }
}
