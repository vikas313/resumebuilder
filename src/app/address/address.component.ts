import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../shared/details.service';
import { details } from '../shared/type.interface';

@Component({
  standalone: true,
  selector: 'app-address',
  templateUrl:'./address.component.html',
  styleUrls:['./address.component.css']
})
export class AddressComponent implements OnInit {
  public setails!: details;
  constructor(private details: DetailsService) {}
  ngOnInit() {
    this.setails = this.details.userDetails;
  }
}
