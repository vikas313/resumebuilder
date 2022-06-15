import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { DetailsService } from '../shared/details.service';

@Component({
  standalone: true,
  selector: 'app-academicinputs',
  imports: [CommonModule, FormsModule],
  templateUrl: './academicinputs.component.html',
  styleUrls: ['./academicinputs.component.css'],
})
export class AcademicinputsComponent implements OnInit {
  constructor(private details:DetailsService) {}
  isvalid:boolean = false
  @Output() isval = new EventEmitter<boolean>();

  ngOnInit(): void {}
  college(det: NgForm) {
  
    this.details.addAcademic(det.value)
    this.isvalid = true
    this.isval.emit(this.isvalid)
  }
}
