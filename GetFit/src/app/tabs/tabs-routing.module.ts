import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () => import('../home/home.page').then(m => m.HomePage)
      },
      {
        path: 'workout-list',
        loadComponent: () => import('../workout-list/workout-list.page').then(m => m.WorkoutListPage)
      },
      {
        path: 'workout-details/:id',
        loadComponent: () => import('../workout-details/workout-details.page').then(m => m.WorkoutDetailsPage)
      },
      {
        path: 'progress',
        loadComponent: () => import('../progress/progress.page').then(m => m.ProgressPage)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
