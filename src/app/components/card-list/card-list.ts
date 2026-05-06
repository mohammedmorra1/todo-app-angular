import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Card } from '../card/card';
import { FilteredComponent } from './filtered-component/filtered-component';
import ITask from '../../types/ITask';

@Component({
  selector: 'card-list',
  imports: [Card, FilteredComponent],
  templateUrl: './card-list.html',
  styleUrl: './card-list.css',
})
export class CardList implements OnChanges, OnInit {
  @Input() taskList: ITask[] = [];
  filter: 'all' | 'done' | 'due' = 'all';
  tasksCopy: ITask[] = [];
  ngOnInit(): void {
    this.filter = 'all';
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['taskList'].currentValue);
  }
  changeFilter(filter: 'all' | 'done' | 'due') {
    this.filter = filter;
  }
}
