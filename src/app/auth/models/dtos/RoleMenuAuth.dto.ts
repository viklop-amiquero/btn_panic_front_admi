export interface RoleMenuAuthDto {
    role_menu: RoleMenuAuth[]
}

export interface RoleMenuAuth {
    id: number
    role_id: number
    menu_clave: string
    ruta?: string
    icono?: string
    menu_id: number
    permiso_id: number
}
