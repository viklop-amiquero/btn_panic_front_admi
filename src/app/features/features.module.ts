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
import { HeaderLayoutComponent } from './layout/header-layout/header-layout.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { UnauthorizedPageComponent } from './components/unauthorized-page/unauthorized-page.component'

@NgModule({
    declarations: [
        DashboardPageComponent,
        IndexPageComponent,
        FeatureLayoutComponent,
        SidenavFeatureComponent,
        ToolbarFeatureComponent,
        HeaderFeatureComponent,
        HeaderLayoutComponent,
        ConfirmDialogComponent,
        UnauthorizedPageComponent,
    ],
    imports: [CommonModule, FeaturesRoutingModule, SharedModule],
    exports: [HeaderFeatureComponent],
})
export class FeaturesModule {}
