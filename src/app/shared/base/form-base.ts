import { ValidatorsService } from '../services/validators/validators.service'
import { FormGroup } from '@angular/forms'

export abstract class FormBaseComponent {
    namePattern!: string
    emailPattern!: string
    dniPattern!: string
    digitoPattern!: string
    celularPattern!: string
    protected form!: FormGroup

    constructor(protected validatorService: ValidatorsService) {
        this.namePattern = validatorService.namePattern
        this.emailPattern = validatorService.emailPattern
        this.dniPattern = validatorService.dniPattern
        this.digitoPattern = validatorService.digitoPattern
        this.celularPattern = validatorService.celularPattern
    }

    getCurrentCredentials() {
        const data = this.form.value
        return data
    }

    isInvalidField(field: string): boolean | null {
        return this.validatorService.isInvalidField(this.form, field)
    }

    getErrorMessage(field: string): string | null {
        return this.validatorService.getErrorMessage(field, this.form)
    }

    onSubmitForm(form: FormGroup, callback: () => void): void {
        if (form.invalid) {
            form.markAllAsTouched()
            return
        }
        callback()
    }
}
