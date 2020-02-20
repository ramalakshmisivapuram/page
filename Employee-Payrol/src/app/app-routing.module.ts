import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ResetComponent } from './component/reset/reset.component';
import { HomeTabComponent } from './component/home-tab/home-tab.component';
import { JoiningTabsComponent } from './component/joining-tabs/joining-tabs.component';
import { ProfessionalProfileComponent } from './component/professional-profile/professional-profile.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'reset',component:ResetComponent},
  {path:'home-tabs',component:HomeTabComponent},
  {path:'joining-tabs',component:JoiningTabsComponent},
  {path:'professionalprofile-tabs',component:ProfessionalProfileComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
