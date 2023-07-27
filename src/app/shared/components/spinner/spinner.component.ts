import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

/**
 * css spinner from: https://cssloaders.github.io/
 * **/

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
