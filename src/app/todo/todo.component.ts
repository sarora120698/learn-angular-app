import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  tasks: { id: number; title: string }[] = [];
  newTaskTitle: string = '';
  taskIdCounter: number = 1;

  addTask(): void {
    if (this.newTaskTitle.trim() !== '') {
      this.tasks.push({ id: this.taskIdCounter++, title: this.newTaskTitle });
      this.newTaskTitle = '';
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
