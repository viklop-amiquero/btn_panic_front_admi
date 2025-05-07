import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { RoutesName } from './shared/routes/routes'
import { IndexPageComponent } from './features/dashboard/pages/index-page/index-page.component'
import { noAuthGuard } from './core/guards/no-auth.guard'
import { authGuard } from './core/guards/auth.guard'

const routes: Routes = [
    {
        path: RoutesName.AUTH.route,
        loadChildren: () =>
            import('./auth/auth.module').then((m) => m.AuthModule),
        canActivate: [noAuthGuard],
    },
    {
        path: RoutesName.INDEX.route,
        loadChildren: () =>
            import('./features/features.module').then((m) => m.FeaturesModule),
        canActivate: [authGuard],
    },
    {
        path: '**',
        redirectTo: RoutesName.AUTH.route,
        pathMatch: 'full',
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
