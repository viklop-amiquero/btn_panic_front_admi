import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { RoutesName } from './shared/routes/routes'
import { IndexPageComponent } from './features/dashboard/pages/index-page/index-page.component'

const routes: Routes = [
    {
        path: RoutesName.AUTH.route,
        loadChildren: () =>
            import('./auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: RoutesName.INDEX.route,
        component: IndexPageComponent,
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
