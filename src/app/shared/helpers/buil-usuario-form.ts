import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ValidatorsService } from '../services/validators/validators.service'

export function buildUsuarioForm(
    validatorService: ValidatorsService
): FormGroup {
    const controls: { [key: string]: FormControl } = {
        name: new FormControl('', [
            Validators.required,
            Validators.pattern(validatorService.namePattern),
            Validators.maxLength(50),
        ]),
        apellido: new FormControl('', [
            Validators.required,
            Validators.pattern(validatorService.namePattern),
            Validators.maxLength(50),
        ]),
        direccion_domicilio: new FormControl('', [
            Validators.required,
            Validators.maxLength(100),
        ]),
        dni: new FormControl('', [
            Validators.required,
            Validators.pattern(validatorService.dniPattern),
            Validators.maxLength(9),
        ]),

        digito_verificador: new FormControl('', [
            Validators.required,
            Validators.pattern(validatorService.digitoPattern),
            Validators.maxLength(1),
        ]),

        telefono: new FormControl('', [
            Validators.required,
            Validators.pattern(validatorService.celularPattern),
            Validators.maxLength(9),
        ]),

        role_id: new FormControl('', [Validators.required]),
    }

    return new FormGroup(controls)
}
