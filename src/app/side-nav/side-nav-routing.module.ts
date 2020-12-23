import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SideNavPage } from './side-nav.page';

const routes: Routes = [
  {
    path: 'side-nav',
    component: SideNavPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.Tab1PageModule)
      },
      {
        path: 'sinhala',
        loadChildren: () => import('../sinhala/sinhala.module').then( m => m.SinhalaPageModule)
      },
      {
        path: 'lesson',
        loadChildren: () => import('../lesson/lesson.module').then( m => m.LessonPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then( m => m.AboutPageModule)
      },
      {
        path: '',
        redirectTo: '/side-nav/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/side-nav/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SideNavPageRoutingModule {}
