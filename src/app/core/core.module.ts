import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CoreRoutingModule
  ],
  exports: [
    CoreRoutingModule
  ]
})
export class CoreModule { }
