import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { TokenService } from '../../../shared/services/token/token.service'
import { environment } from '../../../../environments/environment'
import { Observable, catchError, throwError } from 'rxjs'
import { MenuListDto } from '../../models/dtos/menu-list.dto'
import { HeaderHttpService } from '../headerHttp/header-http.service'

@Injectable({
    providedIn: 'root',
})
export class MenuService {
    private _apiUrl: string = environment.apiUrl

    constructor(
        private _http: HttpClient,
        private _tokenService: TokenService,
        private _headerHttpService: HeaderHttpService
    ) {}

    getMenu(): Observable<MenuListDto> {
        return this._http
            .get<MenuListDto>(`${this._apiUrl}/api/menu`, {
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
}
