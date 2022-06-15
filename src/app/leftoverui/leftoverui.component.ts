import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DetailsService } from '../shared/details.service';

@Component({
  standalone:true,
  selector: 'app-leftoverui',
  templateUrl: './leftoverui.component.html',
  imports:[FormsModule,CommonModule],
  styleUrls: ['./leftoverui.component.css']
})
export class LeftoveruiComponent implements OnInit {
  skills:string[] = [];
  hobbies:string[]=[];
  strengths:string[];
  weekness:string[];

  constructor(private detailService:DetailsService) { }

  ngOnInit(): void {
    this.skills = this.detailService.skills;
    this.hobbies = this.detailService.hobbies;
    this.strengths = this.detailService.strengths;
    this.weekness = this.detailService.weeknesss
  }

}
