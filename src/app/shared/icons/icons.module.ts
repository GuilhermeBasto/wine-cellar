import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star/star.component';
import { PlusComponent } from './plus/plus.component';
import { BackComponent } from './back/back.component';
import { InfoComponent } from './info/info.component';



@NgModule({
  declarations: [
    StarComponent,
    PlusComponent,
    BackComponent,
    InfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarComponent,
    PlusComponent,
    BackComponent,
    InfoComponent
  ]
})
export class IconsModule { }
