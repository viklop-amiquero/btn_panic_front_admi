export interface RoleMenuByIdListdDto {
    data: RoleMenuByIdDto[]
}

export interface RoleMenuByIdDto {
    id: number
    role_id: number
    role_name: string
    role_description: string
    menu_id: number
    permiso_id: number
}
