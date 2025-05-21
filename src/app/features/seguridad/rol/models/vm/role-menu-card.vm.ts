export interface RoleMenuCardVm {
    rol_id: number
    rol_name: string
    rol_description: string
    permisos: {
        id: number
        menu_id: number
        permiso_id: number
    }[]
}
