export interface RoleMenuListDto {
    data: RoleMenu[]
}

export interface RoleMenu {
    id: number
    id_rol: number
    rol: string
    menu: string
    permiso: string
}
