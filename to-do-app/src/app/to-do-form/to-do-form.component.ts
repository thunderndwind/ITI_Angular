import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-form',
  imports: [FormsModule],
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.scss']
})
export class ToDoFormComponent {
  @Output() taskAdded = new EventEmitter<string>();
  taskName: string = '';

  addTask() {
    if (this.taskName.trim() !== '') {
      this.taskAdded.emit(this.taskName);
      this.taskName = '';
    }
  }
}