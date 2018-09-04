import { Component } from '@angular/core';
import { AlertController, LoadingController, NavController } from 'ionic-angular';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'Firebase';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  infos = [];
  ref = firebase.database().ref('infos/');

  //changed load control to navCtrl
  constructor(private route: ActivatedRoute, public router: Router,
              public navCtrl: NavController,
              public alertController: AlertController) {

    this.ref.on('value', resp => {
      this.infos = [];
      this.infos = snapshotToArray(resp);
    });
  }

  addInfo() {
    this.router.navigate(['/add-info']);
  }

  edit(key) {
    this.router.navigate(['/edit/'+key]);
  }

  async delete(key) {
    const alert = await this.alertController.create({
      message: 'Are you sure want to delete this info?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('cancel');
          }
        }, {
          text: 'Okay',
          handler: () => {
            firebase.database().ref('infos/'+key).remove();
          }
        }
      ]
    });

    await alert.present();
  }

}

/** Add this constant function below the
 * Class block for converting Firebase response
 * to an array.
 *
 * @param snapshot
 * @returns {any[]}
 */
export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });

  return returnArr;
};
