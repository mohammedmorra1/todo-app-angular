import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/Header/Header';
import { Form } from './components/Form/Form';
import { CardList } from './components/card-list/card-list';
// import { Footer } from './components/Footer/Footer';
import { Carrousel } from './components/carrousel/carrousel';
import ITask from './types/ITask';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Form, CardList, Carrousel],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('task1');

  taskList: ITask[] = [];
  addTask(task: any) {
    console.log(task);
    this.taskList = [...this.taskList, task];
  }
}
