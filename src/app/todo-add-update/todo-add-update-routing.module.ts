import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoAddUpdatePage } from './todo-add-update.page';

const routes: Routes = [
  {
    path: '',
    component: TodoAddUpdatePage
  },
  {
    path: ':id',
    component: TodoAddUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoAddUpdatePageRoutingModule {}
