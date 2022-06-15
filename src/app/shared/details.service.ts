import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Academics, details } from './type.interface';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  userDetails: details;
  userAcademics: Academics;
  skills: string[] = [];
  hobbies: string[] = [];
  strengths: string[] = [];
  weeknesss: string[] = [];
  constructor() {}
  showDetails(form: details) {
    this.userDetails = form;
  }
  addAcademic(form: Academics) {
    this.userAcademics = form;
    console.log(this.userAcademics);
  }
  addtoSkills(skill: string) {
    this.skills.push(skill);
  }
  toHobbies(hobby: string) {
    this.hobbies.push(hobby);
  }
  toStrengths(strength: string) {
    this.strengths.push(strength);
  }
  toWeekness(week: string) {
    this.weeknesss.push(week);
  }
}
