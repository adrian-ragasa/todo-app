import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { TodoComponent } from './todo.component';


@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [TodoComponent],
  exports: [TodoComponent]
})
export class TodoModule { }
