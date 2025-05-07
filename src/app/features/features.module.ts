import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { FeaturesRoutingModule } from './features-routing.module';
import { DashboardPageComponent } from './dashboard/pages/dashboard-page/dashboard-page.component';
import { IndexPageComponent } from './dashboard/pages/index-page/index-page.component';
import { FeatureLayoutComponent } from './layout/feature-layout/feature-layout.component'

@NgModule({
    declarations: [
    DashboardPageComponent,
    IndexPageComponent,
    FeatureLayoutComponent
  ],
    imports: [CommonModule, FeaturesRoutingModule],
})
export class FeaturesModule {}
