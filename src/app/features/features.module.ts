import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { FeaturesRoutingModule } from './features-routing.module'
import { DashboardPageComponent } from './dashboard/pages/dashboard-page/dashboard-page.component'

@NgModule({
    declarations: [DashboardPageComponent],
    imports: [CommonModule, FeaturesRoutingModule],
})
export class FeaturesModule {}
