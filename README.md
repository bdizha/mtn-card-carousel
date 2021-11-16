# Mtn Card Carousel

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.2.

Installation
-----------

```
`npm install mtn-card-carousel`
```

Setup
-----

```
## App module import

import { NgModule } from '@angular/core';
  ---
  ---
import { MtnCardCarouselModule } from 'mtn-card-carousel';

@NgModule({
  imports: [   
  ---
    MtnCardCarouselModule
  ],   
  ---
})
export class AppModule { }
```

Usage
-----

```
In your component bind in both the items and config properties as follows:

<mtn-card-carousel [items]="slideItems" [config]="slideConfig"></mtn-card-carousel>
```
