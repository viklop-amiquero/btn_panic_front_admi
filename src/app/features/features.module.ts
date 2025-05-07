import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { FeaturesRoutingModule } from './features-routing.module';
import { DashboardPageComponent } from './dashboard/pages/dashboard-page/dashboard-page.component';
import { IndexPageComponent } from './dashboard/pages/index-page/index-page.component'

@NgModule({
    declarations: [
    DashboardPageComponent,
    IndexPageComponent
  ],
    imports: [CommonModule, FeaturesRoutingModule],
})
export class FeaturesModule {}
