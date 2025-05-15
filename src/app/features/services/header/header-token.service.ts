import { Injectable } from '@angular/core'
import { HttpHeaders } from '@angular/common/http'

@Injectable({
    providedIn: 'root',
})
export class HeaderTokenService {
    constructor() {}

    get defaultHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Accept: 'application/json',
        })
    }

    getHeaders(token: string): HttpHeaders {
        const headers = new HttpHeaders({
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        })

        return headers
    }
}
