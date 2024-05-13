import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PhotoToHomeComponent } from './components/photo-to-home/photo-to-home.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhatisinvisiblefriendComponent } from './components/whatisinvisiblefriend/whatisinvisiblefriend.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PhotoToHomeComponent,
    FooterComponent,
    WhatisinvisiblefriendComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
