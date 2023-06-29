import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BuilderModule } from '@builder.io/angular';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [AppComponent, LandingPageComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BuilderModule.forRoot('56769547c06f46fb97d068491c70d03d'),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
