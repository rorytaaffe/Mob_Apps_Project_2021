import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {

  weatherData: any = [];
  weatherDataUSA: any = [];
  weatherDataItaly: any = [];

  constructor(private service: WeatherService) { }

  ngOnInit() {

    this.service.GetWeatherData().subscribe(
      (data) => {
      this.weatherData = data.weather;
      console.log(this.weatherData);
      });

      this.service.GetWeatherDataUSA().subscribe(
        (data) => {
        this.weatherDataUSA = data.weather;
        console.log(this.weatherData);
        });

        this.service.GetWeatherDataItaly().subscribe(
          (data) => {
          this.weatherDataItaly = data.weather;
          console.log(this.weatherData);
          });

      
  }

}
