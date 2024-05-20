import { Component } from '@angular/core';
import { ShoppingItemsService } from '../services/shopping-items.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public item: string;

  constructor(
    private shoppingList: ShoppingItemsService,
    private alertController: AlertController
  ) { }

  addItem() {
    console.log(this.item);

    // Comprobamos si el item existe o no
    if (!this.shoppingList.existsItem(this.item)) {
      // Añadimos el item
      this.shoppingList.addItem(this.item);
      // Reiniciamos el item
      this.item = '';
      console.log(this.shoppingList.items);
      this.alertSuccess();
    } else {
      this.alertError();
    }
  }

  async alertSuccess(){
    // Creamos el alert
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: '¡Item añadido!',
      buttons: ['OK']
    })
    // Mostramos el alert
    await alert.present();
  }

  async alertError(){
     // Creamos el alert
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'El item ya existe',
      buttons: ['OK']
    })
     // Mostramos el alert
    await alert.present();
  }

}
