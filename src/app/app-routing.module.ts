import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'todo-list',
    loadChildren: () => import('./todo-list/todo-list.module').then(m => m.TodoListPageModule)
  },
  {
    path: 'todo-detail/:id',
    loadChildren: () => import('./todo-detail/todo-detail.module').then(m => m.TodoDetailPageModule)
  },
  {
    path: 'todo-add-update',
    loadChildren: () => import('./todo-add-update/todo-add-update.module').then(m => m.TodoAddUpdatePageModule)
  },
  {
    path: '',
    redirectTo: 'todo-list',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
