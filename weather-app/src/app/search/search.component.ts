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

  /*
  * Function : weatherLookUp - Used to make Service Request to Open Weather API
  *  Input Params: ZipCode - User Entered Zip Code 
  */

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

  /*
  * Function : processWeatherData - Used to process Json Response from Open Weather API
  * Input Params: data - Json Object returned from Service Response.
  */

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
