import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    constructor() {}

    setLocalStorage(key: string, value: any): void {
        localStorage.setItem(key, value)
    }

    getLocalStorage(key: string) {
        if (!localStorage.getItem(key)) return
        const value = localStorage.getItem(key)
        return value
    }

    clearLocalStorage(): void {
        localStorage.clear()
    }
}
