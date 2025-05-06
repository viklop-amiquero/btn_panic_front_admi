import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { provideHttpClient } from '@angular/common/http';
import { DashboardPageComponent } from './features/dashboard/pages/dashboard-page/dashboard-page.component'

@NgModule({
    declarations: [AppComponent, DashboardPageComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [provideHttpClient()],
    bootstrap: [AppComponent],
})
export class AppModule {}
