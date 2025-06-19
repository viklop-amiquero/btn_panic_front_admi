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
            .private('reportes')
            .listen('.reporte.creado', (event: any) => {
                callback(event)
            })
    }

    listenReporteUpdated(callback: (id: number) => void) {
        this.echo
            .private('reporte-updated') // canal privado
            .listen('.reporte.actualizado', (event: any) => {
                callback(event)
            })
    }

    disconnect() {
        this.echo.leave('reportes')
    }
}
