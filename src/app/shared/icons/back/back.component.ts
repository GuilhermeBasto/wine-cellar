import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
