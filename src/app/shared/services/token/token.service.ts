import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root',
})
export class TokenService {
    constructor() {}

    getToken() {
        const value = localStorage.getItem('authToken')
        return value
    }
}
