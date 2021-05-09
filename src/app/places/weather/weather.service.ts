import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient, private http2:HttpClient, private http3:HttpClient,) { }

  GetWeatherData():Observable<any>{
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=France&appid=8470af7af094307bf4fc71c963ae6fca');
    }

  GetWeatherDataUSA():Observable<any>{
    return this.http2.get('https://api.openweathermap.org/data/2.5/weather?q=USA&appid=8470af7af094307bf4fc71c963ae6fca');
    } 
  
  GetWeatherDataItaly():Observable<any>{
    return this.http3.get('https://api.openweathermap.org/data/2.5/weather?q=Italy&appid=8470af7af094307bf4fc71c963ae6fca');
    }
  
}
