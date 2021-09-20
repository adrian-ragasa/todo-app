import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodoAddUpdatePageRoutingModule } from './todo-add-update-routing.module';

import { TodoAddUpdatePage } from './todo-add-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodoAddUpdatePageRoutingModule
  ],
  declarations: [TodoAddUpdatePage]
})
export class TodoAddUpdatePageModule {}
