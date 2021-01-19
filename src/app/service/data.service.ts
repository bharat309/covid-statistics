import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { GlobalData } from '../model/global-data';
import { CountryComponent } from '../components/navbar/country/country.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
private GlobalDataUrl = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/06-10-2020.csv';

constructor(private http:HttpClient) { }

getGlobalData(){
  return this.http.get(this.GlobalDataUrl, {responseType:"text"}).pipe(
    map(res=>{
      // let data:GlobalData[]=[];
      let raw={};
      // console.log("ghghghgh",res);
      let rows=res.split("\n");
      // console.log("rows",rows);
      rows.splice(0,1);

      rows.forEach(row=>{
      let col= row.split(/,(?=\S)/);
      // console.log("col",col);
  // data.push({
  // country:col[3],
  // confirmed:+col[7],
  // deaths:+col[8],
  // recovered:+col[9],
  // active:+col[10]

  //     })
  let nation={ 
  country:col[3],
  confirmed:+col[7],
  deaths:+col[8],
  recovered:+col[9],
  active:+col[10]
}
let temp= raw[nation.country]
raw[nation.country]=nation;
if(temp){
  nation.active=nation.active + temp.active;
  nation.confirmed=nation.active + temp.active;
  nation.deaths=nation.deaths + temp.deaths;
  nation.recovered=nation.recovered + temp.recovered;

  raw[nation.country]=temp;
}else{
  raw[nation.country]=nation;
}
  
  
})
console.log("dataSummary",raw); 

      return <GlobalData[]>Object.values(raw);
    })
  )
  
}
}
