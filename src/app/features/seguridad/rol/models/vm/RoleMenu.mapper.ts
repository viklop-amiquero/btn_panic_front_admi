import { RoleMenu } from '../dtos/role-menu-list.dto'
import { RoleMenuViewModel } from './role-menu-view-model.vm'

export function RoleMenuMapper(data: RoleMenu[]): RoleMenuViewModel[] {
    const grouped: { [key: number]: RoleMenuViewModel } = {}

    data.forEach((item) => {
        if (!grouped[item.id_rol]) {
            grouped[item.id_rol] = {
                id_rol: item.id_rol,
                rol: item.rol,
                descripcion: item.rol_descripcion,
                permisos: [],
            }
        }

        grouped[item.id_rol].permisos.push({
            id: item.id,
            menu: item.menu,
            permiso: item.permiso,
        })
    })

    return Object.values(grouped)
}
