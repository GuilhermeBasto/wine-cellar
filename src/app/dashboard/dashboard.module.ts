import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { WineDetailsComponent } from './pages/wine-details/wine-details.component';
import { SharedModule } from '../shared/shared.module';
import { AddWineComponent } from './pages/add-wine/add-wine.component';

@NgModule({
  declarations: [DashboardComponent, WineDetailsComponent, AddWineComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
