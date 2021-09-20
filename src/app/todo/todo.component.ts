import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo, ToDoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  @Output() todoDeleted = new EventEmitter<boolean>(false);

  loading: boolean = false;
  constructor(private _todo: ToDoService) { }

  ngOnInit() { }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }

  deleteToDo(id) {
    this.loading = true
    this._todo.deleteTodo(id).subscribe(done => {
      this.loading = false
      this.todoDeleted.emit(true);
    }, err => this.loading = false)
  }
}
