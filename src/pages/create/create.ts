import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'Firebase';
import { ActivatedRoute, Router  } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
/**
 * Generated class for the CreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {
  ref = firebase.database().ref('infos/');
  infoForm: FormGroup

  constructor(private route: ActivatedRoute,
              public router: Router,
              private formBuilder: FormBuilder) {
    this.infoForm = this.formBuilder.group({
      'info_title' : [null, Validators.required],
      'info_description' : [null, Validators.required]
    });
  }

  saveInfo() {
    let newInfo = firebase.database().ref('infos/').push();
    newInfo.set(this.infoForm.value);
    this.router.navigate(['/detail/'+newInfo.key]);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }

}
