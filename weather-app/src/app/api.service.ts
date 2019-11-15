import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  API_KEY = 'f5535ef2adc6fb411b7deab49e5008a1';

  public getWeatherReport(zipCode){

    return this.httpClient.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${this.API_KEY}`);
  }
}
