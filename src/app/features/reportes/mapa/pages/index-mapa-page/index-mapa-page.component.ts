import { Component } from '@angular/core'
import { ReporteDataMapaVM } from '../../../models/vms/reporte-data-mapa.vm'

@Component({
    selector: 'app-index-mapa-page',
    standalone: false,
    templateUrl: './index-mapa-page.component.html',
    styleUrl: './index-mapa-page.component.css',
})
export class IndexMapaPageComponent {
    public reporte!: ReporteDataMapaVM

    getReporte(reporte: ReporteDataMapaVM) {
        console.log('reporte desde el padre', reporte)
        this.reporte = reporte
    }
}
