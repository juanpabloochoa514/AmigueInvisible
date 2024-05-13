import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PhotoToHomeComponent } from './components/photo-to-home/photo-to-home.component';
import { WhatisinvisiblefriendComponent } from './components/whatisinvisiblefriend/whatisinvisiblefriend.component';

const routes: Routes = [
  {
    path:"whatIsInvisibleFriend",
    component: WhatisinvisiblefriendComponent,
  },
  {
    path:"home",
    component:HomeComponent,
  },
  {
    path:"phototohome",
    component:PhotoToHomeComponent,
  },
  {
    path:"navbar",
    component:NavbarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
