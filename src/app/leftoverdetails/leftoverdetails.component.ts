import { CommonModule } from '@angular/common';
import {
  Component,
  destroyPlatform,
  ElementRef,
  OnInit,
  ViewChild,
  EventEmitter,
  Output
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { DetailsService } from '../shared/details.service';

@Component({
  standalone: true,
  selector: 'app-leftoverdetails',
  imports: [CommonModule, FormsModule],
  templateUrl: './leftoverdetails.component.html',
  styleUrls: ['./leftoverdetails.component.css'],
})
export class LeftoverdetailsComponent implements OnInit {
  constructor(private detailservice: DetailsService) {}
  @ViewChild('skill') val: ElementRef;
  @ViewChild('hobby') vals: ElementRef;
  @ViewChild('strengths') valss: ElementRef;
  @ViewChild('weekness') valsss: ElementRef;

  @Output() isval = new EventEmitter<boolean>();
  ngOnInit(): void {}
  Submit(form: NgForm) {
 alert('hope you filled correctly')
 this.isval.emit(true);
  }
  addToSkill(skill: string) {
    if (skill !== '') {
      this.detailservice.addtoSkills(skill);
      // this.skills.push(skill);
      this.val.nativeElement.value = '';
    }
  }

  addToHobbies(skill: string) {
    if (skill !== '') {
      // this.hobbies.push(skill);
      this.detailservice.toHobbies(skill);
      this.vals.nativeElement.value = '';
    }
  }
  addToStrengths(skill: string) {
    if (skill !== '') {
      // this.strengths.push(skill);
      this.detailservice.toStrengths(skill);
      this.valss.nativeElement.value = '';
    }
  }

  addToWeekness(skill: string) {
    if (skill !== '') {
      // this.weeknesss.push(skill);
      this.detailservice.toWeekness(skill);
      this.valsss.nativeElement.value = '';
    }
  }
}
