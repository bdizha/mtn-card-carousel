import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'mtn-card-carousel',
  template: `
    <div class="slider-container">
      <ngx-slick-carousel class="carousel"
                          #slickModal="slick-carousel"
                          [config]="config">
        <div ngxSlickItem *ngFor="let item of items" class="slide">
          <div class="cell">
            <div class="cell-inner">
              <div class="cell-image">
                <img src="{{ item.image }}" alt="" width="100%">
              </div>
              <h2 class="cell-title">{{item.title}}</h2>
              <h3 class="cell-action">
                <a href="#">Start here</a>
              </h3>
            </div>
          </div>
        </div>
      </ngx-slick-carousel>
    </div>
  `,
})
export class MtnCardCarouselComponent implements OnInit {
  @Input() items: Array<any> = [];
  @Input() config: Array<any> = [];

  constructor() {
  }

  ngOnInit(): void {
  }
}
