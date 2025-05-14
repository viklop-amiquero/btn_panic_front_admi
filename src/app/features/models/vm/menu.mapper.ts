import { MenuDto } from '../dtos/menu-list.dto'
import { MenuVm } from './menu.vm'

export function mapMenuDtoToVmList(data: MenuDto[]): MenuVm[] {
    const map = new Map<string, MenuVm>()

    // Mapeo inicial de cada DTO a VM
    data.forEach((dto) => {
        const vm: MenuVm = {
            id: dto.id,
            nombre: dto.nombre,
            icono: dto.icono,
            ruta: dto.ruta,
            children: [],
        }
        map.set(dto.nivel_parentesco!, vm)
    })

    const tree: MenuVm[] = []

    data.forEach((dto) => {
        const current = map.get(dto.nivel_parentesco!)
        if (dto.parentesco) {
            const parent = map.get(dto.parentesco)
            if (parent) {
                parent.children.push(current!)
            }
        } else {
            tree.push(current!)
        }
    })

    return tree
}
