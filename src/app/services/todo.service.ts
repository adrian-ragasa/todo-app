import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

type ToDoStatus = 'todo' | 'done'

export interface Todo {
  name: string;
  description: string;
  date?: string;
  _id?: string;
  status: ToDoStatus;
}

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  
  constructor(private http: HttpClient) { }

  public getToDos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${environment.todoApi}/todos`)
  }

  public getTodoById(id: string): Observable<Todo> {
    return this.http.get<Todo>(`${environment.todoApi}/todo/${id}`)
  }

  public addTodo(todo: Todo) {
    return this.http.post(`${environment.todoApi}/todo/add`, todo)
  }

  public editTodo(id: string, todo: Todo) {
    return this.http.put(`${environment.todoApi}/todo/edit/${id}`, todo)
  }

  public deleteTodo(id: string) {
    return this.http.delete(`${environment.todoApi}/todo/delete/${id}`)
  }
}
