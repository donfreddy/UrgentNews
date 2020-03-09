import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(public popoverCtrl: PopoverController) { }

  ngOnInit() {}

  close() {
    this.popoverCtrl.dismiss();
  }

  doc() {
    window.open('https://ionicframework.com/docs', '_blank');
    this.close();
  } 

  gitHub() {
    window.open('https://github.com/ionic-team/ionic', '_blank');
    this.close();
  }

}
