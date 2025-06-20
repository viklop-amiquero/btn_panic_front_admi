import { Component, OnInit } from '@angular/core'
import { HeaderLayoutService } from '../../../../services/headerLayout/header-layout.service'
import { PermissionService } from '../../../../services/permission/permission.service'
import { FormBaseComponent } from '../../../../../shared/base/form-base'
import { ValidatorsService } from '../../../../../shared/services/validators/validators.service'
import { buildCategoriaForm } from '../../../../../shared/helpers/build-categoria-form'
import { CategoriaService } from '../../services/categoria.service'
import { SnackbarService } from '../../../../../shared/services/snackbar/snackbar.service'
import { Router } from '@angular/router'
import { RoutesName as rn } from '../../../../../shared/routes/routes'

@Component({
    selector: 'app-create-categoria-page',
    standalone: false,
    templateUrl: './create-categoria-page.component.html',
    styleUrl: './create-categoria-page.component.css',
})
export class CreateCategoriaPageComponent
    extends FormBaseComponent
    implements OnInit
{
    title = 'Nueva categoría'

    constructor(
        private _headerLayoutService: HeaderLayoutService,
        private _validatorService: ValidatorsService,
        private _permissionService: PermissionService,
        private _categoriaService: CategoriaService,
        private _snackbarService: SnackbarService,
        private _router: Router
    ) {
        super(_validatorService)
    }

    ngOnInit(): void {
        this.setHeaderLayoutService()
        this.buildForm()
    }

    setHeaderLayoutService(): void {
        this._headerLayoutService.setHeader({
            breadcrumbs: [
                { label: 'Categoría', link: '' },
                { label: 'Crear', link: '' },
            ],
            title: 'Categorías',
            showButton: false,
        })
    }

    buildForm(): void {
        this.form = buildCategoriaForm(this.validatorService)
    }

    onSubmit(): void {
        this.onSubmitForm(this.form, () => {
            const data = this.getCurrentCredentials()
            this._categoriaService.createCategoria(data).subscribe({
                next: ({ message }) => {
                    this._snackbarService.success(message, 3000)
                    this.form.reset()
                    this._router.navigate([rn.CATEGORIA.index.route])
                },
                error: (err) => {
                    this._snackbarService.error(
                        'Ocurió un error, por favor inténtelo más tarde',
                        3000
                    )
                },
            })
        })
    }
}
