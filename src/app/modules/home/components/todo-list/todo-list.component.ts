import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {
  taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  ngDoCheck(): void {
    this.setLocalStorage();
  }  
  
  setLocalStorage() {
    if (this.taskList){
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));  
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }

  deleteTaskItem(index: number) {
    this.taskList.splice(index, 1);
  }

  deleteAllTasks() {
    const confirm = window.confirm("Do you really want to delete all items?");

    if (confirm) {
      this.taskList = [];
    }
  }

  setEmitTaskItem(event: string) {
    this.taskList.push({ task: event, checked: false });
  }

  validationInputItem(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm("Task is empty, do you want to delete this task?");

      if (confirm) {
        this.deleteTaskItem(index);
      }
    }
  }
}
