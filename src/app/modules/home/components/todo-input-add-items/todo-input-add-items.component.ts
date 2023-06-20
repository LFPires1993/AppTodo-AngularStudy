import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-items',
  templateUrl: './todo-input-add-items.component.html',
  styleUrls: ['./todo-input-add-items.component.scss']
})
export class TodoInputAddItemsComponent {
  @Output() emitTaskItemList = new EventEmitter();

  newTaskItem: string = "";

  submitTaskItem() {
    if (this.newTaskItem.trim()) {
      this.emitTaskItemList.emit(this.newTaskItem);
      this.newTaskItem = "";
    }
  }
}
