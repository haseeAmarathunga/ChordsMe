import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./side-nav/side-nav.module').then( m => m.SideNavPageModule)
  },
  {
    path: 'lesson',
    loadChildren: () => import('./lesson/lesson.module').then( m => m.LessonPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'instruction',
    loadChildren: () => import('./instruction/instruction.module').then( m => m.InstructionPageModule)
  },
  {
    path: 'side-nav',
    loadChildren: () => import('./side-nav/side-nav.module').then( m => m.SideNavPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
