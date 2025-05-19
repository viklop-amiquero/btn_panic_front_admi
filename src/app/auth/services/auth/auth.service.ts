import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { environment } from '../../../../environments/environment'
import { AuthRequest } from '../../models/requests/auth.request'
import { AuthResponse } from '../../models/responses/auth.response'
import { catchError, throwError, Observable, of } from 'rxjs'
import { TokenService } from '../../../shared/services/token/token.service'

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private readonly _http = inject(HttpClient)
    private readonly _tokenService = inject(TokenService)
    private readonly _apiUrl: string = environment.apiUrl
    constructor() {}

    login(data: AuthRequest): Observable<AuthResponse> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Accept: 'application/json',
        })

        return this._http
            .post<AuthResponse>(`${this._apiUrl}/api/login`, data, { headers })
            .pipe(
                catchError((error) => {
                    return throwError(() => error)
                })
            )
    }

    checkAuthentication(): Observable<boolean> {
        const token = this._tokenService.getToken()
        return of(!!token)
    }
}
