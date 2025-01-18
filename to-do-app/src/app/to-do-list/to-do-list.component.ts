import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from "../models/task";
import { ToDoListItemComponent } from "../to-do-list-item/to-do-list-item.component";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
  imports: [ToDoListItemComponent]
})
export class ToDoListComponent {
  @Input() tasks: Task[] = [];
  @Output() taskDeleted = new EventEmitter<Task>();
  @Output() taskCompleted = new EventEmitter<Task>();

  deleteTask(task: Task) {
    this.taskDeleted.emit(task);
  }

  completeTask(task: Task) {
    this.taskCompleted.emit(task);
  }
}