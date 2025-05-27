export interface UsuarioPagedDto {
    data: UsuarioDto[]
    links: Links
    meta: Meta
}

export interface UsuarioDto {
    username: string
    password_attempts: number
    estado: string
    usuario_crea: null
    usuario_modifica: number | null
    created_at: null
    updated_at: Date | null
    rol: string
    persona: Persona
}

interface Persona {
    nombre: string
    apellido: string
    direccion_domicilio: string
    dni: string
    digito_verificador: string
    telefono: string
    usuario_crea: null
    usuario_modifica: null
    created_at: null
    updated_at: Date | null
}

interface Links {
    first: string
    last: string
    prev: null
    next: string
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
