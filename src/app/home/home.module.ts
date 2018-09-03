import { NgModule } from '@angular/core';
import { HomeComponent } from './containers/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
