import { Component } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  taskList: Array<TaskList> = [];
  
  deleteTaskItem(index: number) {
    this.taskList.splice(index, 1);
  }

  deleteAllTasks() {
    const confirm = window.confirm("Você realmente deseja excluir todos os items?");

    if (confirm) {
      this.taskList = [];
    }
  }

  setEmitTaskItem(event: string) {
    this.taskList.push({ task: event, checked: false });
  }
}
