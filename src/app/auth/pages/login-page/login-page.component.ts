import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { RoutesName } from '../../../shared/routes/routes'
import { ValidatorsService } from '../../../shared/services/validators/validators.service'
import { AuthRequest } from '../../models/requests/auth.request'

@Component({
    selector: 'app-login-page',
    standalone: false,
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.css',
})
export class LoginPageComponent implements OnInit {
    private _fb: FormBuilder = new FormBuilder()
    public routesName = RoutesName
    public showPassword: boolean = false

    constructor(private _validator: ValidatorsService) {}

    public loginForm!: FormGroup

    ngOnInit(): void {
        this.loginForm = this._fb.group({
            username: [
                '',
                [
                    Validators.required,
                    Validators.pattern(this._validator.dniPattern),
                ],
            ],
            password: ['', Validators.required],
        })
    }

    togglePasswordVisibility() {
        this.showPassword = !this.showPassword
    }

    getCurrentCredentials(): AuthRequest {
        const data = this.loginForm.value
        return data
    }

    isInvalidField(field: string): boolean | null {
        return this._validator.isInvalidField(this.loginForm, field)
    }

    getErrorMessage(field: string): string | null {
        return this._validator.getErrorMessage(field, this.loginForm)
    }

    onSubmit(): void {
        if (this.loginForm.invalid) {
            this.loginForm.markAllAsTouched()
            return
        }
    }
}
