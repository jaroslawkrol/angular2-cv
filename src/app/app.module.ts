import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MaterialModule } from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LeftSideComponent} from './components/left-side/left-side.component';
import { ContentComponent } from './components/content/content.component';
import { RightSideComponent } from './components/right-side/right-side.component';
import { HeaderComponent } from './components/header/header.component';
import { CircleComponent } from './components/circle/circle.component';
import {StoreModule} from "@ngrx/store";
import * as fromRoot from "./reducers/root.reducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import {CategoryEffects} from "./effects/category.effects";
import {CategoriesService} from "./services/categories.service";

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
    StoreModule.provideStore(fromRoot.reducer),
    StoreDevtoolsModule.instrumentStore({
      maxAge: 5
    }),
    EffectsModule.run(CategoryEffects)
  ],
  providers: [CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
