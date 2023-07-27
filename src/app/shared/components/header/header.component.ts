import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  brand = 'Wine Cellar';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleAdd(): void {
    this.router.navigateByUrl('/add-wine');
  }
}
