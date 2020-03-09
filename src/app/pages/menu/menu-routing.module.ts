import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'login',
        loadChildren: () => import('../auth/login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: 'registration',
        loadChildren: () => import('../auth/registration/registration.module').then( m => m.RegistrationPageModule)
      },
      {
        path: 'forgot-password',
        loadChildren: () => import('../auth/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
      },
      {
        path: 'verify-email',
        loadChildren: () => import('../auth/verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'favorites',
        loadChildren: () => import('../favorites/favorites.module').then( m => m.FavoritesPageModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('../categories/categories.module').then( m => m.CategoriesPageModule)
      },
      {
        path: 'profil',
        loadChildren: () => import('../profil/profil.module').then( m => m.ProfilPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then( m => m.SettingsPageModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('../notifications/notifications.module').then( m => m.NotificationsPageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../search/search.module').then( m => m.SearchPageModule)
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/menu/home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
