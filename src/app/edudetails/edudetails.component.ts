import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../shared/details.service';
import { Academics } from '../shared/type.interface';

@Component({
  standalone:true,
  selector: 'app-edudetails',
  templateUrl: './edudetails.component.html',
  styleUrls: ['./edudetails.component.css']
})
export class EdudetailsComponent implements OnInit {
 academicDetails:Academics;

  constructor(private userAcads:DetailsService) { }

  ngOnInit(): void {
    this.academicDetails = this.userAcads.userAcademics;
  }
  


}
