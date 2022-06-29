import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Image } from "./image"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spacee_exercise';
  readonly URL = "https://api.nasa.gov/planetary/apod?api_key=xXO1hYPWfoWcc7X7XjVZGwFTtEfHv2E2gNLKTwI5"

  image!: any;

  constructor(private http: HttpClient) {} 

  getImage() {
    this.http.get<any>(this.URL).subscribe(data => {
        this.image = data
    })
    console.log(this.image)
  }
}