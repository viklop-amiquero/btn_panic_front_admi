import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { RoutesName } from '../../../shared/routes/routes'
import { ValidatorsService } from '../../../shared/services/validators/validators.service'
import { AuthRequest } from '../../models/requests/auth.request'
import { AuthService } from '../../services/auth/auth.service'
import { MatSnackBar } from '@angular/material/snack-bar'
import { AuthResponse } from '../../models/responses/auth.response'
import { Router } from '@angular/router'

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

    constructor(
        private _validator: ValidatorsService,
        private _authService: AuthService,
        private _snackBar: MatSnackBar,
        private _router: Router
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

        this._authService.login(this.getCurrentCredentials()).subscribe({
            next: async (resp: AuthResponse) => {
                if (!resp.token) {
                    // this._toast.showToast(
                    //     'Respuesta inesperada del servidor.',
                    //     'danger'
                    // )
                    this._snackBar.open(
                        'Respuesta inesperada del servidor.',
                        'cerrar',
                        {
                            duration: 3000,
                        }
                    )
                    return
                }

                // Almacenar el token
                // await Preferences.set({ key: 'authToken', value: resp.token })

                this.loginForm.reset()

                // Redirigir a home
                this._router.navigate([RoutesName.INDEX.route])
            },
            error: (err) => {
                if (!err.error || !err.error.errors) {
                    // this._toast.showToast(
                    //     'Ocurrió un error inesperado, por favor intentelo más tarde.',
                    //     'warning'
                    // )
                    this._snackBar.open(
                        'Ocurrió un error inesperado, por favor intentelo más tarde.',
                        'cerrar',
                        {
                            duration: 3000,
                        }
                    )
                    return
                }

                const errorMessages = Object.values(err.error.errors).flat()
                errorMessages.forEach((message, index) => {
                    setTimeout(() => {
                        // this._toast.showToast(`${message}`, 'danger')
                        this._snackBar.open(`${message}`, 'cerrar', {
                            duration: 3000,
                        })
                    }, index * 1500)
                })
            },
        })
    }
}
