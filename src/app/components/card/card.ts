import { Component, EventEmitter, Input, Output } from '@angular/core';
import ITask from '../../types/ITask';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'card',
  imports: [FormsModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() Task!: ITask;
  @Output() taskDoneChanged = new EventEmitter<void>();

  onCardClick() {
    this.Task.done = !this.Task.done;
    this.taskDoneChanged.emit();
  }

  onCheckboxClick(event: Event) {
    event.stopPropagation();
  }

  onCheckboxChange() {
    this.taskDoneChanged.emit();
  }
}
