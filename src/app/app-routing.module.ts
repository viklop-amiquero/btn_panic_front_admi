import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { RoutesName } from './shared/routes/routes'

const routes: Routes = [
    {
        // path: RoutesName.AUTH.route,
        path: '',
        loadChildren: () =>
            import('./auth/auth.module').then((m) => m.AuthModule),
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
