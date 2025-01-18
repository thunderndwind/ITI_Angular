import { Component, OnInit } from '@angular/core';
import { generateUUID } from '../utils/uuid.util';
import { Task } from "../models/task";
import tasksData from '../../../public/data/tasks.json'
import { ToDoListComponent } from "../to-do-list/to-do-list.component";
import { ToDoFormComponent } from "../to-do-form/to-do-form.component";

@Component({
  selector: 'app-to-do',
  imports: [ToDoListComponent, ToDoFormComponent],
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})

export class ToDoComponent implements OnInit {
  tasks: Task[] = [];

  ngOnInit() {
    this.loadTasks();
  }

  addTask(name: string) {
    const newTask: Task = {
      id: generateUUID(),
      name: name,
      isDone: false
    };
    this.tasks.push(newTask);
    this.saveTasks();
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(t => t.id !== task.id);
    this.saveTasks();
  }

  completeTask(task: Task) {
    task.isDone = true;
    this.saveTasks();
  }

  loadTasks() {
    const tasksJson = localStorage.getItem('tasks');
    if (tasksJson) {
      this.tasks = JSON.parse(tasksJson);
    } else if (!tasksData) {
      this.tasks = tasksData as Task[];
    }
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}