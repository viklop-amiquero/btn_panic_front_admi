import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { TokenService } from '../../../shared/services/token/token.service'
import { environment } from '../../../../environments/environment'
import { Observable, catchError, throwError } from 'rxjs'
import { MenuDto, MenuListDto } from '../../models/dtos/menu-list.dto'

@Injectable({
    providedIn: 'root',
})
export class MenuService {
    private _apiUrl: string = environment.apiUrl

    constructor(
        private _http: HttpClient,
        private _tokenService: TokenService
    ) {}

    private getHeaders(token: string): HttpHeaders {
        const headers = new HttpHeaders({
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        })

        return headers
    }

    getMenu(): Observable<MenuListDto> {
        return this._http
            .get<MenuListDto>(`${this._apiUrl}/api/menu`, {
                headers: this.getHeaders(this._tokenService.getToken()),
            })
            .pipe(
                catchError((error) => {
                    return throwError(() => error)
                })
            )
    }

    // getMenu(): Observable<MenuDto> {
    //     return this._http
    //         .get<MenuDto>(`${this._apiUrl}/api/menu`, {
    //             headers: this.getHeaders(this._tokenService.getToken()),
    //         })
    //         .pipe(
    //             catchError((error) => {
    //                 return throwError(() => error)
    //             })
    //         )
    // }
}
