import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss'],
})
export class ContentHeaderComponent implements OnInit {
  @Input() title: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleBack() {
    this.router.navigateByUrl('/');
  }
}
