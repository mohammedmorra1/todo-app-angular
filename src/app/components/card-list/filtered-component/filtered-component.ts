import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Card } from '../../card/card';
import ITask from '../../../types/ITask';

@Component({
  selector: 'app-filtered-component',
  imports: [Card],
  templateUrl: './filtered-component.html',
  styleUrl: './filtered-component.css',
})
export class FilteredComponent implements OnChanges {
  @Input() tasksList: ITask[] = [];
  @Input() filter: 'all' | 'done' | 'due' = 'all';
  tasksCopy: ITask[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.filterTasks();
  }

  filterTasks() {
    this.tasksCopy = this.tasksList.filter((task) => {
      if (this.filter === 'all') return true;
      if (this.filter === 'done') return task.done;
      if (this.filter === 'due') return !task.done;
      return false;
    });
  }
}
