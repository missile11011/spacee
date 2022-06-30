import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'spacee_exercise';
  ngOnInit(){
    let date = moment()
    this.getImage(date)
    console.log(this.image.date)
    console.log("hello world") 
  }
  readonly URL = "https://api.nasa.gov/planetary/apod?api_key=xXO1hYPWfoWcc7X7XjVZGwFTtEfHv2E2gNLKTwI5"

  image!: any;
  dateFormat!: any;
  constructor(private http: HttpClient) {} 

  getImage(date:any) {
    let datea = moment(date)
    let dateFormat = datea.format("YYYY-MM-DD")
    this.http.get<any>(this.URL+"&date="+dateFormat).subscribe(data => {
        this.image = data
    })
    return this.image, dateFormat
  }

}