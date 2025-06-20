export interface CategoriaPagedDto {
    data: CategoriaDto[]
    links: Links
    meta: Meta
}

export interface CategoriaDto {
    id: number
    nombre: string
    descripcion: string
    estado: string
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
