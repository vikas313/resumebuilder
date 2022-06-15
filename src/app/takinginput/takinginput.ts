import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { DetailsService } from '../shared/details.service';

@Component({
  standalone: true,
  selector: 'app-takeinputs',
  imports: [FormsModule, CommonModule],
  templateUrl: './takeinputs.component.html',
  styleUrls: ['./takinginput.css'],
})
export class InputComponent {
  isvalid: boolean = false;
 
  @Output() isval = new EventEmitter<boolean>();
  constructor(private detailsService: DetailsService) {}
  Submit(form: NgForm) {
    console.log('working')
    if (form.valid) {
      this.isvalid = true;
      console.log(form.value);
      this.detailsService.showDetails(form.value);
    } else {
      this.isvalid = false;
    }
    this.isval.emit(this.isvalid);
  }
}
