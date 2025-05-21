export interface RoleMenuListDto {
    data: RoleMenu[]
}

export interface RoleMenu {
    id: number
    id_rol: number
    rol: string
    rol_descripcion: string
    menu: string
    permiso: string
}
