import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'sinhala',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../sinhala/sinhala.module').then(m => m.SinhalaPageModule)
          }
        ]
      },
      {
        path: 'lesson',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../lesson/lesson.module').then(m => m.LessonPageModule)
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../about/about.module').then(m => m.AboutPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/main/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/main/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
