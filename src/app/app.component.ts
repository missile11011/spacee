import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as moment from 'moment';
import { HttpErrorResponse } from '@angular/common/http';

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
  errorMessage!: any;
  constructor(private http: HttpClient) {} 

  getImage(date:any) {
    let setdate = moment(date)
    let dateFormat = setdate.format("YYYY-MM-DD")
    console.log(this.errorMessage)
    this.http.get<any>(this.URL+"&date="+dateFormat).subscribe(data => {
      this.image = data;
        console.log(data)
        
    }, (err: HttpErrorResponse) => {
      if (err.error) {
        console.log('An error occurred:', err.error);
        this. errorMessage = "There is not an Astronomy Picture of the Day for this date. Please select another date."
      }
    })
    
    return this.image, dateFormat
  }

}