import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuilderModule } from '@builder.io/angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BuilderModule.forRoot('56769547c06f46fb97d068491c70d03d'),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
