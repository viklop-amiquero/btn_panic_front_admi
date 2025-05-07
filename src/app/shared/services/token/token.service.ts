import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root',
})
export class TokenService {
    constructor() {}

    getToken() {
        if (!localStorage.getItem('authToken')) return
        const value = localStorage.getItem('authToken')
        return value
    }
}
