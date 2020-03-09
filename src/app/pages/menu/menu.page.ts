import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  
  version: string = "0.0.1";
  public appPages = [
    {
      title: 'Accueil',
      url: '/menu/home',
      icon: 'home'
    },
    {
      title: 'categories',
      url: '/menu/categories',
      icon: 'apps'
    },
    {
      title: 'Recherches',
      url: '/menu/search',
      icon: 'search'
    },
    {
      title: 'Favorites',
      url: '/menu/favorites',
      icon: 'heart'
    },
    {
      title: 'Notifications',
      url: '/menu/notifications',
      icon: 'notifications'
    },
    {
      title: 'Profile',
      url: '/menu/profil',
      icon: 'person'
    },
    {
      title: 'Parametres',
      url: '/menu/settings',
      icon: 'settings'
    },
  ];


  constructor() { }

  ngOnInit() {
  }

}
