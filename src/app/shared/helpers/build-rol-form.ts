import { FormControl, FormGroup, Validators } from '@angular/forms'
import { MenuVm } from '../../features/models/vm/menu.vm'
import { ValidatorsService } from '../services/validators/validators.service'

export function buildRolForm(
    menuList: MenuVm[],
    validatorService: ValidatorsService
): FormGroup {
    const controls: { [key: string]: FormControl } = {
        nombre: new FormControl('', [
            Validators.required,
            Validators.pattern(validatorService.namePattern),
        ]),
        descripcion: new FormControl('', [
            Validators.required,
            Validators.maxLength(100),
        ]),
    }

    menuList.forEach((menu) => {
        if (menu.children.length === 0) {
            controls[`menu_${menu.id}`] = new FormControl(
                '',
                Validators.required
            )
        } else {
            menu.children.forEach((child) => {
                controls[`menu_${child.id}`] = new FormControl(
                    '',
                    Validators.required
                )
            })
        }
    })

    return new FormGroup(controls)
}
