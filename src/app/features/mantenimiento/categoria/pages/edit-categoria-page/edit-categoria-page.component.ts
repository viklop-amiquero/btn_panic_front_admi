import { Component, OnInit } from '@angular/core'
import { FormBaseComponent } from '../../../../../shared/base/form-base'
import { HeaderLayoutService } from '../../../../services/headerLayout/header-layout.service'
import { ValidatorsService } from '../../../../../shared/services/validators/validators.service'
import { ActivatedRoute, Router } from '@angular/router'
import { CategoriaService } from '../../services/categoria.service'
import { SnackbarService } from '../../../../../shared/services/snackbar/snackbar.service'
import { SpanForm } from '../../../../seguridad/rol/models/interfaces/span-form'
import { buildCategoriaForm } from '../../../../../shared/helpers/build-categoria-form'
import { CategoriaDto } from '../../models/dtos/categoria.dto'
import { RoutesName as rn } from '../../../../../shared/routes/routes'

@Component({
    selector: 'app-edit-categoria-page',
    standalone: false,
    templateUrl: './edit-categoria-page.component.html',
    styleUrl: './edit-categoria-page.component.css',
})
export class EditCategoriaPageComponent
    extends FormBaseComponent
    implements OnInit
{
    title = 'Editar categoría :'
    id_categoria!: number
    span!: SpanForm
    categoria!: CategoriaDto

    constructor(
        private _headerLayoutService: HeaderLayoutService,
        private _validatorService: ValidatorsService,
        private _activateRoute: ActivatedRoute,
        private _categoriaService: CategoriaService,
        private _snackbarService: SnackbarService,
        private _router: Router
    ) {
        super(_validatorService)
    }

    ngOnInit(): void {
        this.buildForm()
        this.setHeaderLayoutService()
        this.getCategoria()
    }

    setHeaderLayoutService(): void {
        this._headerLayoutService.setHeader({
            breadcrumbs: [
                { label: 'Categoría', link: '' },
                { label: 'Editar', link: '' },
            ],
            title: 'Categoríás',
            showButton: false,
        })
    }

    getCategoria(): void {
        this._activateRoute.params.subscribe(({ id }) => {
            this._categoriaService.getCategoriaById(id).subscribe({
                next: ({ data }) => {
                    this.categoria = data
                    this.id_categoria = data.id
                    this.setSpanValues()
                    this.setFormValues()
                },
                error: (err) => {},
            })
        })
    }

    setSpanValues(): void {
        console.log(this.categoria)
        const { nombre } = this.categoria
        this.span = {
            title: `${nombre}`,
            show: true,
        }
        console.log(this.span)
    }

    setFormValues(): void {
        if (!this.categoria || !this.form) return

        const { nombre, descripcion } = this.categoria

        this.form.patchValue({
            nombre,
            descripcion,
        })
    }

    buildForm(): void {
        this.form = buildCategoriaForm(this._validatorService)
    }

    onSubmit(): void {
        this.onSubmitForm(this.form, () => {
            const request = this.getCurrentCredentials()
            const id = this.id_categoria

            this._categoriaService.updateCategoria(id, request).subscribe({
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
