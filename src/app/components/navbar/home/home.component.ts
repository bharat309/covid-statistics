import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { GlobalData } from 'src/app/model/global-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
totalConfirmed=0;
totalActive=0;
totalDeath=0;
totalRecovered=0;
globalData: GlobalData[]=[];
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getGlobalData().subscribe(
      {
        next:(res)=>{
          this.globalData = res;
         res.forEach(itm=>{
           if(!Number.isNaN(itm.confirmed )){
            this.totalActive += itm.active
            this.totalConfirmed += itm.confirmed
            this.totalDeath += itm.deaths
            this.totalRecovered += itm.recovered
           }
           
         }) 

        console.log("dfghjkl",res);
      }
      }
    )
     
    

  }

}
