import { NgModule } from '@angular/core';
import {IonicModule, IonicPageModule} from 'ionic-angular';
import { CreatePage } from './create';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: CreatePage
  }
];

@NgModule({
  declarations: [
    CreatePage,
  ],
  imports: [
    IonicPageModule.forChild(CreatePage),
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
})
export class CreatePageModule {}
