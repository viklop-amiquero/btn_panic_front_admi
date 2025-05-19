export interface RolCreateRequest {
    nombre: string
    descripcion: string
    permisos: Permiso[]
}

export interface Permiso {
    menu_id: number
    permiso_id: number
}
