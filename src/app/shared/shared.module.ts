import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos de Material
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [],
  exports: [
    MatInputModule,
    MatFormFieldModule
  ]
})
export class SharedModule { }
