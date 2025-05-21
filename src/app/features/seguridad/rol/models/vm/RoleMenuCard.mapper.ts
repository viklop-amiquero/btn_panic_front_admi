import { RoleMenuByIdListdDto } from '../dtos/role-menu-by-id-list.dto'
import { RoleMenuCardVm } from './role-menu-card.vm'

export function mapToRoleMenuCardVm(
    dto: RoleMenuByIdListdDto
): RoleMenuCardVm[] {
    const grouped = new Map<number, RoleMenuCardVm>()

    for (const item of dto.data) {
        if (!grouped.has(item.role_id)) {
            grouped.set(item.role_id, {
                rol_id: item.role_id,
                rol_name: item.role_name,
                rol_description: item.role_description,
                permisos: [],
            })
        }

        grouped.get(item.role_id)!.permisos.push({
            id: item.id,
            menu_id: item.menu_id,
            permiso_id: item.permiso_id,
        })
    }

    return Array.from(grouped.values())
}
