import { MenuDto } from '../dtos/menu-list.dto'
import { MenuVm } from './menu.vm'

export function mapMenuDtoToVmList(data: MenuDto[]): MenuVm[] {
    const map = new Map<string, MenuVm & { orden: number }>()

    // Mapeo inicial de cada DTO a VM
    data.forEach((dto) => {
        const vm: MenuVm & { orden: number } = {
            id: dto.id,
            nombre: dto.nombre,
            icono: dto.icono,
            ruta: dto.ruta,
            children: [],
            orden: parseInt(dto.orden, 10) || 0,
        }
        map.set(dto.nivel_parentesco!, vm)
    })

    // const tree: MenuVm[] = []
    const tree: (MenuVm & { orden: number })[] = []

    data.forEach((dto) => {
        const current = map.get(dto.nivel_parentesco!)
        if (!current) return

        if (dto.parentesco) {
            const parent = map.get(dto.parentesco)
            if (parent) {
                parent.children.push(current)
            }
        } else {
            tree.push(current)
        }
    })

    // Paso 3: Ordenar recursivamente por orden
    function sortTree(nodes: (MenuVm & { orden: number })[]): MenuVm[] {
        return nodes
            .sort((a, b) => a.orden - b.orden)
            .map(({ orden, ...node }) => ({
                ...node,
                children: sortTree(
                    node.children as (MenuVm & { orden: number })[]
                ),
            }))
    }

    return sortTree(tree)
}
