export interface RoleMenuViewModel {
    id_rol: number
    rol: string
    descripcion: string
    permisos: {
        id: number
        menu: string
        permiso: string
    }[]
}
