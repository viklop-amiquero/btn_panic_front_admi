export interface MenuListDto {
    data: MenuDto[]
}

export interface MenuDto {
    id: number
    nombre: string
    icono: null | string
    descripcion: string
    url: null
    ruta: null | string
    nivel_parentesco: null | string
    parentesco: null | string
    nivel: string
    orden: string
    tipo_menu: string
    estado: string
}
