import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { GlobalData } from 'src/app/model/global-data';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
data:GlobalData[]=[];
countryList=[];
// @Input("totalConfirmed") 
totalConfirmed=0;
// @Input("totalActive") 
totalActive=0;
// @Input("totalDeath") 
totalDeath=0;
// @Input("totalRecovered") 
totalRecovered=0;
  constructor(private country:DataService) { }

  ngOnInit(): void {
   this.country.getGlobalData().subscribe(res=>{
     this.data=res;
     this.data.forEach(itm=>{
       this.countryList.push(itm.country)
     })
   })
  }
   updateChange(country){
     console.log(country);
     this.data.forEach(itm=>{
       if(itm.country=== country){
         this.totalActive=itm.active
         this.totalConfirmed=itm.confirmed
         this.totalDeath=itm.deaths
         this.totalRecovered=itm.recovered
       }
     })
   }
  

}
