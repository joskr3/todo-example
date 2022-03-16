import { Component } from "@angular/core";
import { Todo } from "./Todo";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  todos: Todo[] = [];
  newTodo: string = "";

  // saveTodo() {
  //   if (this.newTodo.length > 0) {
  //     this.todos.push({
  //       name: this.newTodo,
  //       isComplete: false
  //     });
  //     this.newTodo = '';
  //   }
  // }

  saveTodo() {
    if (this.newTodo) {
      let todo = new Todo();
      todo.name = this.newTodo;
      todo.isComplete = true;
      this.todos.push(todo);
      this.newTodo = "";
    } else {
      alert("Por favor ingresa una tarea");
    }
  }

  // deleteTodo(todo: Todo){
  //   let index = this.todos.indexOf(todo);
  //   this.todos.splice(index,1);
  // }

  done(id: number) {
    this.todos[id].isComplete = !this.todos[id].isComplete;
  }

  remove(id: number) {
    this.todos = this.todos.filter((_, index) => index !== id);
  }
}
