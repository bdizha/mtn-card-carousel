import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MtnCardCarouselComponent } from './mtn-card-carousel.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    MtnCardCarouselComponent
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule
  ],
  exports: [
    MtnCardCarouselComponent
  ]
})
export class MtnCardCarouselModule { }
