import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import ITask from '../../types/ITask';

class Task implements ITask {
  title: string;
  desc: string;
  priority: string;
  dueDate: string;
  category: string;
  tags: string;
  done: boolean;
  constructor(
    title: string,
    desc: string,
    priority: string,
    dueDate: string,
    category: string,
    tags: string,
  ) {
    this.title = title;
    this.desc = desc;
    this.priority = priority;
    this.dueDate = dueDate;
    this.category = category;
    this.tags = tags;
    this.done = false;
  }
}

@Component({
  selector: 'Form',
  templateUrl: './Form.html',
  imports: [FormsModule],
  styleUrls: ['./Form.css'],
})
export class Form {
  @Output() taskAdded = new EventEmitter<ITask>();

  title: string = '';
  desc: string = '';
  priority: string = '';
  dueDate: string = '';
  category: string = '';
  tags: string = '';

  tasks: ITask[] = [];
  handleSubmit(e: Event) {
    this.addTask(
      new Task(this.title, this.desc, this.priority, this.dueDate, this.category, this.tags),
    );
    // this.clear();
  }
  addTask(task: ITask) {
    // this.tasks.push(task);
    // this.displayTasks();
    this.taskAdded.emit(task);
  }
  displayTasks() {
    console.log(this.tasks);
  }
  clear() {
    this.title = '';
    this.desc = '';
    this.priority = '';
    this.dueDate = '';
    this.category = '';
    this.tags = '';
  }
}
