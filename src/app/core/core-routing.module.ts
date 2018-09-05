import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: '../home/home.module#HomeModule'
  },
  {
    path: 'settings', loadChildren: '../settings/settings.module#SettingsModule'
  },
  {
    path: 'help', loadChildren: '../help/help.module#HelpModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
