import { NgModule } from '@angular/core';
import {MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
