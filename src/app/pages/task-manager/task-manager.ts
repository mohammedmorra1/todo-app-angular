import { Component } from '@angular/core';
import { Form } from '../../components/Form/Form';
import { CardList } from '../../components/card-list/card-list';
import ITask from '../../types/ITask';

@Component({
  selector: 'app-task-manager',
  imports: [Form, CardList],
  templateUrl: './task-manager.html',
  styleUrl: './task-manager.css',
})
export class TaskManager {
  taskList: ITask[] = [];
  addTask(task: any) {
    console.log(task);
    this.taskList = [...this.taskList, task];
  }
}
