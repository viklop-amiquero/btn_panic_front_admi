import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { FeatureLayoutComponent } from './layout/feature-layout/feature-layout.component'
import { RoutesName as rn } from '../shared/routes/routes'
import { DashboardPageComponent } from './dashboard/pages/dashboard-page/dashboard-page.component'
import { IndexPageComponent } from './dashboard/pages/index-page/index-page.component'
import { HeaderLayoutComponent } from './layout/header-layout/header-layout.component'

const routes: Routes = [
    {
        path: '',
        component: FeatureLayoutComponent,
        children: [
            {
                path: '',
                component: IndexPageComponent,
            },
            {
                path: rn.DASHBOARD.route,
                component: DashboardPageComponent,
            },
            {
                path: rn.ROL.index.route,
                component: HeaderLayoutComponent,
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./seguridad/rol/rol.module').then(
                                (m) => m.RolModule
                            ),
                    },
                ],
            },
            {
                path: rn.USUARIO.index.route,
                component: HeaderLayoutComponent,
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./seguridad/usuario/usuario.module').then(
                                (m) => m.UsuarioModule
                            ),
                    },
                ],
            },
            {
                path: rn.REPORTES.mapa.route,
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./reportes/mapa/mapa.module').then(
                                (m) => m.MapaModule
                            ),
                    },
                ],
            },
            {
                path: rn.CATEGORIA.index.route,
                component: HeaderLayoutComponent,
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                './mantenimiento/categoria/categoria.module'
                            ).then((m) => m.CategoriaModule),
                    },
                ],
            },
            {
                path: rn.REPORTES.reporte.route,
                component: HeaderLayoutComponent,
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./reportes/reporte/reporte.module').then(
                                (m) => m.ReporteModule
                            ),
                    },
                ],
            },
            {
                path: '**',
                redirectTo: '',
                pathMatch: 'full',
            },
        ],
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FeaturesRoutingModule {}
