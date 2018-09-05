import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import {SharedModule} from '../shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    CoreRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CoreRoutingModule
  ],
  declarations: [HeaderComponent, FooterComponent]
})
export class CoreModule { }
