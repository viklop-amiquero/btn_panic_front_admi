import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AuthRoutingModule } from './auth-routing.module'
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component'
import { LoginPageComponent } from './pages/login-page/login-page.component'
import { SharedModule } from '../shared/shared.module';
import { HeaderAuthComponent } from './components/header-auth/header-auth.component'

@NgModule({
    declarations: [AuthLayoutComponent, LoginPageComponent, HeaderAuthComponent],
    imports: [CommonModule, AuthRoutingModule, SharedModule],
})
export class AuthModule {}
