import {
    Permiso,
    RolCreateRequest,
} from '../../features/seguridad/rol/models/requests/rol-create.request'

export function transformRolFormValue(formValue: any): RolCreateRequest {
    const { nombre, descripcion, ...menuFields } = formValue

    const permisos: Permiso[] = Object.entries(menuFields).map(
        ([key, permiso_id]) => {
            const menu_id = parseInt(key.replace('menu_', ''), 10)
            return {
                menu_id,
                permiso_id: Number(permiso_id), // 👈 Forzamos el tipo a number
            }
        }
    )

    return {
        nombre,
        descripcion,
        permisos,
    }
}
