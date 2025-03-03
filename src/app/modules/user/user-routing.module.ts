import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TakeTestComponent } from './components/take-test/take-test.component';
import { ViewMyTestResultsComponent } from './components/view-my-test-results/view-my-test-results.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Redirect base user path to dashboard
  { path: 'dashboard', component: DashboardComponent },
  { path: 'take-test/:id', component: TakeTestComponent },
  { path: 'view-my-test-results', component: ViewMyTestResultsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule {}
