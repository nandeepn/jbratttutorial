import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './services/user/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'event-create',
    loadChildren: () =>
      import('./pages/event-create/event-create.module').then(
        m => m.EventCreatePageModule
      ),
    canActivate: [AuthGuard]
  },
  {
    path: 'event-detail/:id',
    loadChildren: () =>
      import('./pages/event-detail/event-detail.module').then(
        m => m.EventDetailPageModule
      ),
    canActivate: [AuthGuard]
  },
  {
    path: 'event-list',
    loadChildren: () =>
      import('./pages/event-list/event-list.module').then(
        m => m.EventListPageModule
      ),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () =>
      import('./pages/reset-password/reset-password.module').then(
        m => m.ResetPasswordPageModule
      ),
    canActivate: [AuthGuard]
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./pages/signup/signup.module').then(m => m.SignupPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
