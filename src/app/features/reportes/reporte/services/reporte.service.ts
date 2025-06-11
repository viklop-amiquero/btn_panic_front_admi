import { Injectable } from '@angular/core'
import { environment } from '../../../../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { TokenService } from '../../../../shared/services/token/token.service'
import { HeaderHttpService } from '../../../services/headerHttp/header-http.service'
import { Observable } from 'rxjs'
import { ReporteShowDto } from '../../mapa/models/dtos/reporte-show.dto'
import { MessageResponse } from '../../../models/interfaces/message.response'
import { ReportePagedDto } from '../../mapa/models/dtos/reporte-list.dto'

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

    getReportes(page: number = 1): Observable<ReportePagedDto> {
        return this._http.get<ReportePagedDto>(
            `${this._apiUrl}/api/reporte?page=${page}`,
            {
                headers: this._headerHttpService.getHeaders(
                    this._tokenService.getToken()
                ),
            }
        )
    }

    getReporteById(id: number): Observable<ReporteShowDto> {
        return this._http.get<ReporteShowDto>(
            `${this._apiUrl}/api/reporte/${id}`,
            {
                headers: this._headerHttpService.getHeaders(
                    this._tokenService.getToken()
                ),
            }
        )
    }

    updateReporte(id: number): Observable<MessageResponse> {
        return this._http.patch<MessageResponse>(
            `${this._apiUrl}/api/reporte/${id}`,
            {},
            {
                headers: this._headerHttpService.getHeaders(
                    this._tokenService.getToken()
                ),
            }
        )
    }
}
