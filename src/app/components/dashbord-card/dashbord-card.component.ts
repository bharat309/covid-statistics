import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord-card',
  templateUrl: './dashbord-card.component.html',
  styleUrls: ['./dashbord-card.component.css']
})
export class DashbordCardComponent implements OnInit {
@Input("totalConfirmed") 
totalConfirmed=0;
@Input("totalActive") 
totalActive=0;
@Input("totalDeath") 
totalDeath=0;
@Input("totalRecovered") 
totalRecovered=0;
  constructor() { }

  ngOnInit(): void {
  }

}
