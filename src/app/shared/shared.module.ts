import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos de Material
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    MatInputModule, 
    MatFormFieldModule,
    NgxMatTimepickerModule,
    NgxMatDatetimePickerModule
  ],
  exports: [
    CommonModule, 
    MatInputModule, 
    MatFormFieldModule,
    NgxMatTimepickerModule,
    NgxMatDatetimePickerModule
  ]
})
export class SharedModule { }
