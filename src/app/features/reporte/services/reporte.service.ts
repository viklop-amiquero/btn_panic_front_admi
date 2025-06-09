import { Injectable } from '@angular/core'
import { environment } from '../../../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { TokenService } from '../../../shared/services/token/token.service'
import { HeaderHttpService } from '../../services/headerHttp/header-http.service'
import { Observable } from 'rxjs'
import { ReporteListDto } from '../models/dtos/reporte-list.dto'

@Injectable({
    providedIn: 'root',
})
export class ReporteService {
    private _apiUrl: string = environment.apiUrl

    constructor(
        private _http: HttpClient,
        private _tokenService: TokenService,
        private _headerHttpService: HeaderHttpService
    ) {}

    getReportes(): Observable<ReporteListDto> {
        return this._http.get<ReporteListDto>(`${this._apiUrl}/api/reporte`, {
            headers: this._headerHttpService.getHeaders(
                this._tokenService.getToken()
            ),
        })
    }
}
