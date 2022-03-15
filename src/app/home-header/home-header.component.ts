import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { AlertModalComponent } from '../alert-modal/alert-modal.component';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent implements OnInit {

  constructor(private menu: MenuController, private modalController: ModalController) { }

  ngOnInit() { }


  toggleMenu() {
    this.menu.toggle();
  }

  sendMoney() {

    this.showModal("Feature not available", "Sorry!", false);

  }

  async showModal(msg, tt, status) {


    const modal = await this.modalController.create({
      component: AlertModalComponent,
      componentProps: { message: { message: msg, title: tt, success: status } },
      cssClass: 'alert-modal'
    });

    await modal.present();

  }


}
