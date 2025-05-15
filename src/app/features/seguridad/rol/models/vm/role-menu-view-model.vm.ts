export interface RoleMenuViewModel {
    id_rol: number
    rol: string
    permisos: {
        id: number
        menu: string
        permiso: string
    }[]
}
