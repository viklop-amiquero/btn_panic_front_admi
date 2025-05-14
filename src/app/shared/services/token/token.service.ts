import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root',
})
export class TokenService {
    constructor() {}

    getToken(): string {
        return localStorage.getItem('authToken') || ''
    }
}
