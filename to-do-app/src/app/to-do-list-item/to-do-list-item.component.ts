import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-to-do-list-item',
  imports: [],
  templateUrl: './to-do-list-item.component.html',
  styleUrl: './to-do-list-item.component.scss'
})

export class ToDoListItemComponent {
  @Input() task: Task = { id: '', name: '', isDone: false };
  @Output() taskDeleted = new EventEmitter<Task>();
  @Output() taskCompleted = new EventEmitter<Task>();
  markDone() {
    this.taskCompleted.emit(this.task)
    this.task.isDone = true;
  }
  deleteTask() {
    this.taskDeleted.emit(this.task);
  }
}