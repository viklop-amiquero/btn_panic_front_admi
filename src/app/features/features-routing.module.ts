import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { FeatureLayoutComponent } from './layout/feature-layout/feature-layout.component'
import { RoutesName as rn } from '../shared/routes/routes'
import { DashboardPageComponent } from './dashboard/pages/dashboard-page/dashboard-page.component'
import { IndexPageComponent } from './dashboard/pages/index-page/index-page.component'

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
                loadChildren: () =>
                    import('./seguridad/rol/rol.module').then(
                        (m) => m.RolModule
                    ),
            },
            {
                path: '**',
                redirectTo: rn.INDEX.route,
                // redirectTo: 'login',
            },
        ],
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FeaturesRoutingModule {}
