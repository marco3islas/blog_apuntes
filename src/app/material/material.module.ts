import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
 import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
	exports: [
		MatButtonModule,
		MatCardModule,
		MatIconModule,
		MatSliderModule,
		MatToolbarModule,
	
	]
})
export class MaterialModule { }
