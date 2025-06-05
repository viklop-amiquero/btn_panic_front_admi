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

    saveEncoded(key: string, value: any) {
        const data = JSON.stringify(value)
        const encoded = btoa(data)
        localStorage.setItem(key, encoded)
    }

    loadEncoded(key: string) {
        const encoded = localStorage.getItem(key)
        if (!encoded) return null

        try {
            const decoded = JSON.parse(atob(encoded))
            return decoded
        } catch (error) {
            // console.error('Error en decodificar', error)
            return null
        }
    }

    clearLocalStorage(): void {
        localStorage.clear()
    }
}
