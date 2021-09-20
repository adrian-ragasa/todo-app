import { Component, OnInit } from '@angular/core';
import { ToDoService, Todo } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
})
export class TodoListPage implements OnInit {
  loading: boolean = false;
  todos: Todo[]

  constructor(private _todo: ToDoService) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.loading = true
    this.getToDos()
  }

  refresh(ev?) {
    this.getToDos()
    if (!this.loading && ev)
      ev.detail.complete();
  }

  getToDos() {
    this._todo.getToDos().subscribe(todos => {
      this.todos = todos
      this.loading = false
    }, err => this.loading = false)
  }
}
