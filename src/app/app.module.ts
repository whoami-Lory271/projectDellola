import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common'


import { AppComponent } from './app.component';
import { DogFrameComponent } from './dog-frame/dog-frame.component';
import {FormsModule} from "@angular/forms";
import { DogDetailComponent } from './dog-detail/dog-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DogFrameComponent,
    DogDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
