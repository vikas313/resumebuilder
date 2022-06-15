import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AcademicinputsComponent } from './academicinputs/academicinputs.component';

import { AddressComponent } from './address/address.component';
import { EdudetailsComponent } from './edudetails/edudetails.component';
import { LeftoverdetailsComponent } from './leftoverdetails/leftoverdetails.component';
import { LeftoveruiComponent } from './leftoverui/leftoverui.component';
import { InputComponent } from './takinginput/takinginput';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    AddressComponent,
    InputComponent,
    CommonModule,
    AcademicinputsComponent,
    EdudetailsComponent,
    LeftoverdetailsComponent,
    LeftoveruiComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Resume Builder';
  isvalid: boolean = false;
  isvalid2: boolean = false;
  isvalid3: boolean = false;
  check(str: boolean) {
    this.isvalid = str;
  }
  check2(str: boolean) {
    this.isvalid2 = str;
  }
  check3(str:boolean){
    this.isvalid3 = str;
  }
}
