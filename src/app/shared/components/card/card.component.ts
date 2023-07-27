import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WineModel, emptyWineModel } from '../../models/wine.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() wine: WineModel = emptyWineModel;
  @Output() iconClicked = new EventEmitter<WineModel>();
  @Output() cardClicked = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  handleIconClick(e: Event) {
    e.stopPropagation();
    this.iconClicked.emit(this.wine);
  }

  handleContentClick(e: Event) {
    e.stopPropagation();
    this.cardClicked.emit(this.wine.id);
  }
}
