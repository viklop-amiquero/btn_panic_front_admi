import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { FeaturesRoutingModule } from './features-routing.module'
import { DashboardPageComponent } from './dashboard/pages/dashboard-page/dashboard-page.component'
import { IndexPageComponent } from './dashboard/pages/index-page/index-page.component'
import { FeatureLayoutComponent } from './layout/feature-layout/feature-layout.component'
import { SharedModule } from '../shared/shared.module'
import { SidenavFeatureComponent } from './components/sidenav-feature/sidenav-feature.component'
import { ToolbarFeatureComponent } from './components/toolbar-feature/toolbar-feature.component'
import { HeaderFeatureComponent } from './components/header-feature/header-feature.component'

@NgModule({
    declarations: [
        DashboardPageComponent,
        IndexPageComponent,
        FeatureLayoutComponent,
        SidenavFeatureComponent,
        ToolbarFeatureComponent,
        HeaderFeatureComponent,
    ],
    imports: [CommonModule, FeaturesRoutingModule, SharedModule],
})
export class FeaturesModule {}
