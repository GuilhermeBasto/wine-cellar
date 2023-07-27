import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { LabelValueComponent } from './label-value/label-value.component';
import { InputComponent } from './input/input.component';
import { ModalComponent } from './modal/modal.component';
import { IconsModule } from '../icons/icons.module';
import { TextareaComponent } from './textarea/textarea.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ContentHeaderComponent } from './content-header/content-header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    CardComponent,
    LabelValueComponent,
    InputComponent,
    TextareaComponent,
    ModalComponent,
    SpinnerComponent,
    ContentHeaderComponent,
  ],
  imports: [CommonModule, IconsModule],
  exports: [
    HeaderComponent,
    ButtonComponent,
    CardComponent,
    LabelValueComponent,
    InputComponent,
    ModalComponent,
    TextareaComponent,
    SpinnerComponent,
    ContentHeaderComponent,
  ],
})
export class ComponentsModule {}
