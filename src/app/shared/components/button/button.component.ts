import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
  @Input() disabled = false;
  @Input() type: 'primary' | 'secondary' | 'danger' | 'round' = 'primary';

  @Input() set loading(loading: boolean) {
    this._loading = loading;
  }
  get loading() {
    return this._loading;
  }

  private _loading = false;

  @Output() public clicked: EventEmitter<MouseEvent> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleClick(event: MouseEvent): void {
    if (!this.disabled) {
      this.clicked.emit(event);
    }
  }
}
