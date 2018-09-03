import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    CoreRoutingModule
  ],
  exports: [
    CoreRoutingModule
  ]
})
export class CoreModule { }
