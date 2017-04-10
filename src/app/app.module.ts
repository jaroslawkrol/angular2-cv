import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MaterialModule } from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LeftSideComponent} from './left-side/left-side.component';
import { ContentComponent } from './content/content.component';
import { RightSideComponent } from './right-side/right-side.component';
import { HeaderComponent } from './header/header.component';
import { CircleComponent } from './circle/circle.component';
import {StoreModule} from "@ngrx/store";
import {layoutReducer} from "./reducers/step.reducer";

@NgModule({
  declarations: [
    AppComponent,
    LeftSideComponent,
    ContentComponent,
    RightSideComponent,
    HeaderComponent,
    CircleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    StoreModule.provideStore(layoutReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
