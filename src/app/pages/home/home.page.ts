import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { IonContent, PopoverController } from '@ionic/angular';
import { MenuComponent } from 'src/app/menu/menu.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  data: any;
  @ViewChild(IonContent, { static: false }) content: IonContent;

  constructor(
    private myService: NewsService,
    private router: Router,
    public popoverCtrl: PopoverController
  ) { }

  async menu(event) {
    const popover = await this.popoverCtrl.create({
      component: MenuComponent,
      translucent: true,
      event
    });
    console.log('menu clicked');
    return await popover.present();
  }


  ngOnInit() {
    this.myService.getData('top-headlines?country=fr')
      .subscribe(data => {
        this.data = data;
      })
  }

  singleArticle(article) {
    this.myService.currentArticle = article;
    this.router.navigate(['detail']);
  }

  ScrollToTop() {
    this.content.scrollToTop(2000);
  }

  goToSearchPage() {
    this.router.navigate(['menu/search']);
  }
}
