import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ValidatorsService } from '../services/validators/validators.service'

export function buildCategoriaForm(
    validatorService: ValidatorsService
): FormGroup {
    const controls: { [key: string]: FormControl } = {
        nombre: new FormControl('', [
            Validators.required,
            Validators.pattern(validatorService.namePattern),
            Validators.maxLength(50),
        ]),
        descripcion: new FormControl('', [
            Validators.required,
            Validators.maxLength(100),
        ]),
    }

    return new FormGroup(controls)
}
