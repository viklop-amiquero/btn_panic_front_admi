import { ReporteDataMapaVM } from './reporte-data-mapa.vm'
import { ReporteDto } from '../dtos/reporte-list.dto'

export function reporteMapper(reportes: ReporteDto[]): ReporteDataMapaVM[] {
    return reportes
        .filter((reporte) => reporte.estado === '1')
        .map((reporte) => {
            return {
                id: reporte.id,
                categoria: reporte.categoria,
                latitud: Number(reporte.latitud),
                longitud: Number(reporte.longitud),
                estado: reporte.estado,
            }
        })
}
