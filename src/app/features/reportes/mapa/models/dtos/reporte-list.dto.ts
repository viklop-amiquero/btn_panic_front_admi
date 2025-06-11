export interface ReporteListDto {
    data: ReporteDto[]
    links: Links
    meta: Meta
}

export interface ReporteDto {
    id: number
    imagen: null
    descripcion: string
    categoria: string
    direccion: string
    usuario_nombre: null | string
    usuario_apellido: null | string
    cliente_nombre: string
    cliente_apellido: string
    latitud: string
    longitud: string
    estado: string
    usuario_crea: null
    usuario_modifica: null
    created_at: string
    created_date: string
    updated_at: null
    updated_date: null
}

interface Links {
    first: string
    last: string
    prev: null
    next: null
}

interface Meta {
    current_page: number
    from: number
    last_page: number
    links: Link[]
    path: string
    per_page: number
    to: number
    total: number
}

interface Link {
    url: null | string
    label: string
    active: boolean
}
