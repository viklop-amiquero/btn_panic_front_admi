import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component'
import { RoutesName } from '../shared/routes/routes'
import { LoginPageComponent } from './pages/login-page/login-page.component'

const routes: Routes = [
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            {
                path: RoutesName.LOGIN.route,
                component: LoginPageComponent,
            },
            {
                path: '**',
                redirectTo: RoutesName.LOGIN.route,
                // redirectTo: 'login',
            },
        ],
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule {}
