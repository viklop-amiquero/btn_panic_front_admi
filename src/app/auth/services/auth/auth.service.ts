import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { environment } from '../../../../environments/environment'
import { AuthRequest } from '../../models/requests/auth.request'
import { AuthResponse } from '../../models/responses/auth.response'
import { catchError, throwError, Observable } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private readonly _http = inject(HttpClient)
    private readonly _apiUrl: string = environment.apiUrl
    constructor() {}

    private get defaultHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Accept: 'application/json',
        })
    }

    // private get authHeaders(): Observable<HttpHeaders> {
    //     return from(this.tokenService.loadToken()).pipe(
    //         map((token) => {
    //             if (!token) throw new Error('No token available')
    //             return this.defaultHeaders.set(
    //                 'Authorization',
    //                 `Bearer ${token}`
    //             )
    //         })
    //     )
    // }

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
}
