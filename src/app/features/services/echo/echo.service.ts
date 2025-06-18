import { Injectable } from '@angular/core'
import Echo from 'laravel-echo'
import Pusher from 'pusher-js'
import { TokenService } from '../../../shared/services/token/token.service'
import { environment } from '../../../../environments/environment'

@Injectable({
    providedIn: 'root',
})
export class EchoService {
    public echo: any
    // public echo: any

    constructor(private _tokenService: TokenService) {
        ;(window as any).Pusher = Pusher
        this.echo = new Echo({
            broadcaster: 'pusher',
            key: environment.pusher.key,
            cluster: environment.pusher.cluster,
            forceTLS: environment.pusher.forceTLS,
            encrypted: true,
            // client: Pusher,
            authEndpoint: `${environment.apiUrl}/api/broadcasting/auth`,
            auth: {
                headers: {
                    Authorization: `Bearer ${this._tokenService.getToken()}`,
                },
            },
        })
    }

    listenToReportes(callback: (data: any) => void) {
        this.echo
            .private('reportes') // canal privado
            .listen('.reporte.creado', (event: any) => {
                callback(event)
            })
    }

    // listenPublicReportes(callback: (data: any) => void) {
    //     this.echo
    //         .channel('reportes') // canal público
    //         .listen('.reporte.creado', (event: any) => {
    //             console.log('📡 Público:', event)
    //             callback(event)
    //         })
    // }

    disconnect() {
        this.echo.leave('reportes')
    }
    // listenToReportes(callback: (data: any) => void) {
    //     this.echo.private('reportes').listen('.reporte.creado', callback)
    // }
}
