export interface MenuVm {
    id: number
    nombre: string
    icono: string | null
    ruta: string | null
    children: MenuVm[]
    expanded?: boolean // para controlar visibilidad
}
