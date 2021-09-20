import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoService, Todo } from '../services/todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.page.html',
  styleUrls: ['./todo-detail.page.scss'],
})
export class TodoDetailPage implements OnInit {

  public todo: Todo;

  constructor(
    private _todo: ToDoService,
    private activatedRoute: ActivatedRoute
  ) { }

  public ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this._todo.getTodoById(id).subscribe(todo => this.todo = todo);
  }

  public getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'ToDo List' : '';
  }
}
