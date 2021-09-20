import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo, ToDoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-add-update',
  templateUrl: './todo-add-update.page.html',
  styleUrls: ['./todo-add-update.page.scss'],
})
export class TodoAddUpdatePage implements OnInit {

  EDIT_MODE = false
  id: string;
  todo: Todo = {
    name: '',
    description: '',
    status: 'todo'
  }

  constructor(private activatedRoute: ActivatedRoute, private _todo: ToDoService, private router: Router) { }

  public ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.EDIT_MODE = this.id ? true : false;
    if (this.EDIT_MODE)
      this._todo.getTodoById(this.id).subscribe(todo => this.todo = todo);
  }

  public getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'ToDo List' : '';
  }

  public addUpdateToDo(editMode) {
    if (editMode) {
      this._todo.editTodo(this.id, this.todo).subscribe(res => {
        this.router.navigate(['/todo-list'])
      })
    } else {
      this._todo.addTodo(this.todo).subscribe(res => {
        this.todo = {
          name: '',
          description: '',
          status: 'todo'
        }
        this.router.navigate(['/todo-list'])
      })
    }
  }
}
