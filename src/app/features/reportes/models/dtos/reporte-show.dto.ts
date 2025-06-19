export interface ReporteShowDto {
    data: ReporteShow
}

export interface ReporteShow {
    id: number
    categoria: string
    imagen?: string
    descripcion: string
    direccion: string
    cliente: string
    telefono: string
}
