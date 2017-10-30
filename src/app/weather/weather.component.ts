import { Component, OnInit } from '@angular/core';
//viet WeatherService de lay nhiet do cua 1 thanh pho nao do
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService] //import service do vao
})
export class WeatherComponent implements OnInit {
  txtCityName = '';
  cityName = '';
  temp = null;
  isLoading = false;
  //khai bao bien weatherService voi kieu la WeatherService de su dung
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {}

  getWeather() {
    this.isLoading = true;
    this.weatherService.getTemp(this.txtCityName)
    .then(temp => {
      this.cityName = this.txtCityName;
      this.temp = temp;
      this.isLoading = false;
      this.txtCityName = '';
    })
    .catch(err => {
      alert('Cannot find your city!');
      this.isLoading = false;
      this.cityName = '';
      this.txtCityName = '';
    });
  }

  getMessage() {
    if (this.isLoading) {
      return 'Loading...';
    }
    return this.cityName === '' ? 'Enter your city name' : (this.cityName + ' is now ' + this.temp);
  }
}
