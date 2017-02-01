import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SDKBrowserModule } from './shared/sdk/index';
import { AppComponent } from './app.component';

import { UiModule } from './ui/ui.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SDKBrowserModule.forRoot(),
    UiModule,
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent,
  ]
})

export class AppModule { }
