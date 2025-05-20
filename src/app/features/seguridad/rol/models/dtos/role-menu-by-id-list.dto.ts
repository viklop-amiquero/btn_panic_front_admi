export interface RoleMenuByIdListdDto {
    data: RoleMenuByIdDto[]
}

export interface RoleMenuByIdDto {
    id: number
    role_id: number
    menu_id: number
    permiso_id: number
}
