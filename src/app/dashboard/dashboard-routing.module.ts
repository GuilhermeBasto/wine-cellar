import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { WineDetailsComponent } from './pages/wine-details/wine-details.component';
import { AddWineComponent } from './pages/add-wine/add-wine.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'wine/:id', component: WineDetailsComponent },
  { path: 'wine/:id/edit', component: AddWineComponent },
  { path: 'add-wine', component: AddWineComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
