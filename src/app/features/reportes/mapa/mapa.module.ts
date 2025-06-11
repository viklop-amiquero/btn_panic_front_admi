import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MapaRoutingModule } from './mapa-routing.module'
import { SharedModule } from '../../../shared/shared.module';
import { UpdateReporteComponent } from './components/dialog/update-reporte/update-reporte.component';
import { ListReporteComponent } from './components/list-reporte/list-reporte.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { IndexMapaPageComponent } from './pages/index-mapa-page/index-mapa-page.component';
import { ClockComponent } from './components/clock/clock.component'

@NgModule({
    declarations: [
    UpdateReporteComponent,
    ListReporteComponent,
    MapaComponent,
    IndexMapaPageComponent,
    ClockComponent
  ],
    imports: [CommonModule, MapaRoutingModule, SharedModule],
})
export class MapaModule {}
