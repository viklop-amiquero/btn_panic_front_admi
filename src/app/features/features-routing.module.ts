import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { FeatureLayoutComponent } from './layout/feature-layout/feature-layout.component'
import { RoutesName } from '../shared/routes/routes'
import { DashboardPageComponent } from './dashboard/pages/dashboard-page/dashboard-page.component'
import { IndexPageComponent } from './dashboard/pages/index-page/index-page.component'
import { RolPageComponent } from './seguridad/rol/pages/rol-page/rol-page.component'

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
                path: RoutesName.DASHBOARD.route,
                component: DashboardPageComponent,
            },
            {
                path: RoutesName.ROL.route,
                component: RolPageComponent,
            },
            {
                path: '**',
                redirectTo: RoutesName.INDEX.route,
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
