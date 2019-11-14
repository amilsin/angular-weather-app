import { Component, OnInit} from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  displayreport: boolean = false;
  weatherReport: object;
  processedOutput: Object;
  errorMessage: string;
  ngOnInit() {}

  weatherLookUp(zipCode) {
    if (zipCode) {
      this.apiService.getWeatherReport(zipCode).subscribe((data)=>{
        this.displayreport = true;
        this.processWeatherData(data);
        this.weatherReport = this.processedOutput;
        this.errorMessage ='';
      },(error)=>{
        this.displayreport = false;
        this.errorMessage = "Invalid Zip code.";
      });
    }
  };

  processWeatherData(data) {
    this.processedOutput = {};
    if (data) {
      this.processedOutput['name'] = data['name'];
      this.processedOutput['temp'] = Math.round(data['main']['temp']);
      this.processedOutput['humidity'] = Math.round(data['main']['humidity']);
      this.processedOutput['temp_min'] = Math.round(data['main']['temp_min']);
      this.processedOutput['temp_max'] = Math.round(data['main']['temp_max']);
      this.processedOutput['icon'] = data['weather'][0].icon;
      this.processedOutput['wind_speed'] = Math.round(data['wind']['speed']);
    }

  }

}
