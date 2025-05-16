import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { RoutesName } from '../../../shared/routes/routes'
import { ValidatorsService } from '../../../shared/services/validators/validators.service'
import { AuthRequest } from '../../models/requests/auth.request'
import { AuthService } from '../../services/auth/auth.service'
import { AuthResponse } from '../../models/responses/auth.response'
import { Router } from '@angular/router'
import { SnackbarService } from '../../../shared/services/snackbar/snackbar.service'
import { PasswordVisibilityHandler } from '../../../shared/helpers/password-visibility.helper'
import { TokenService } from '../../../shared/services/token/token.service'
import { LocalStorageService } from '../../../shared/services/localstorage/local-storage.service'

@Component({
    selector: 'app-login-page',
    standalone: false,
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.css',
})
export class LoginPageComponent implements OnInit {
    private _fb: FormBuilder = new FormBuilder()
    public routesName = RoutesName
    // public showPassword: boolean = false
    public showPassword = new PasswordVisibilityHandler()

    constructor(
        private _validator: ValidatorsService,
        private _authService: AuthService,
        private _snackBarService: SnackbarService,
        private _router: Router,
        private _tokenService: TokenService,
        private _localStorageService: LocalStorageService
    ) {}

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

    // togglePasswordVisibility() {
    //     this.showPassword = !this.showPassword
    // }

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

        this._authService.login(this.getCurrentCredentials()).subscribe({
            next: async ({ token }: AuthResponse) => {
                if (!token) {
                    this._snackBarService.warning(
                        'Respuesta inesperada del servidor.',
                        3000
                    )

                    return
                }
                // console.log()
                // Almacenar el token
                this._localStorageService.setLocalStorage('authToken', token)
                // await Preferences.set({ key: 'authToken', value: resp.token })

                this.loginForm.reset()

                // Redirigir a home
                // this._snackBarService.success('login exitoso', 3000)
                this._router.navigate([RoutesName.INDEX.route])
                // this._router.navigate([RoutesName.INDEX.route])
            },
            error: (err) => {
                if (!err.error || !err.error.errors) {
                    this._snackBarService.warning(
                        'Ocurrió un error inesperado, por favor intentelo más tarde.',
                        3000
                    )
                    return
                }

                const errorMessages = Object.values(err.error.errors).flat()
                errorMessages.forEach((message, index) => {
                    setTimeout(() => {
                        this._snackBarService.warning(`${message}`, 3000)
                    }, index * 1500)
                })
            },
        })
    }
}
