import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { RoutesName } from '../../../shared/routes/routes'
import { ValidatorsService } from '../../../shared/services/validators/validators.service'
import { AuthService } from '../../services/auth/auth.service'
import { AuthResponse } from '../../models/responses/auth.response'
import { Router } from '@angular/router'
import { SnackbarService } from '../../../shared/services/snackbar/snackbar.service'
import { PasswordVisibilityHandler } from '../../../shared/helpers/password-visibility.helper'
import { TokenService } from '../../../shared/services/token/token.service'
import { LocalStorageService } from '../../../shared/services/localstorage/local-storage.service'
import { FormBaseComponent } from '../../../shared/base/form-base'

@Component({
    selector: 'app-login-page',
    standalone: false,
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.css',
})
export class LoginPageComponent extends FormBaseComponent implements OnInit {
    private _fb: FormBuilder = new FormBuilder()
    public routesName = RoutesName
    public showPassword = new PasswordVisibilityHandler()

    constructor(
        private _validator: ValidatorsService,
        private _authService: AuthService,
        private _snackBarService: SnackbarService,
        private _router: Router,
        private _tokenService: TokenService,
        private _localStorageService: LocalStorageService
    ) {
        super(_validator)
    }

    ngOnInit(): void {
        this.form = this._fb.group({
            username: [
                '',
                [Validators.required, Validators.pattern(this.dniPattern)],
            ],
            password: ['', Validators.required],
        })
    }

    onSubmit(): void {
        this.onSubmitForm(this.form, () => {
            this._authService.login(this.getCurrentCredentials()).subscribe({
                next: async ({ token }: AuthResponse) => {
                    if (!token) {
                        this._snackBarService.warning(
                            'Respuesta inesperada del servidor.',
                            3000
                        )

                        return
                    }
                    // Almacenar el token
                    this._localStorageService.setLocalStorage(
                        'authToken',
                        token
                    )

                    this.form.reset()

                    // Redirigir a home
                    this._router.navigate([RoutesName.INDEX.route])
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
        })
    }
}
