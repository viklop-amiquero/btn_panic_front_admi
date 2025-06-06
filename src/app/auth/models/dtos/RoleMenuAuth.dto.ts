export interface RoleMenuAuthDto {
    role_menu: RoleMenuAuth[]
}

export interface RoleMenuAuth {
    id: number
    role_id: number
    menu_clave: string
    menu_id: number
    permiso_id: number
}
