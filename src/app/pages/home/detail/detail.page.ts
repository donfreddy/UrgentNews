import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  favory: string = 'heart-outline';
  article;

  constructor(private myService: NewsService, public toastController: ToastController) { }

  ngOnInit() {
    this.article = this.myService.currentArticle;
  }

  async love() {
    if (this.favory === 'heart-outline') {
      this.favory = 'heart'

      const toast = await this.toastController.create({
        color: 'danger',
        message: 'Favori ajouté avec succès.',
        duration: 2000,
      });
      await toast.present();
    } else {
      this.favory = 'heart-outline';

      const toast = await this.toastController.create({
        color: 'danger',
        message: 'Favori supprimé avec succès.',
        duration: 2000
      });
      toast.present();
    }
  }
}
