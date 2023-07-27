import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';
import { IconsModule } from './icons/icons.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, ComponentsModule, IconsModule, ReactiveFormsModule],
  exports: [ComponentsModule, RouterModule, IconsModule, ReactiveFormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
  ],
})
export class SharedModule {}
