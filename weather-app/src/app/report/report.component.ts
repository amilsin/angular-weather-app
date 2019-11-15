import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.less']
})

/* Report Component Child component for Search Component 
   Parent Component Pass WeatherReport as Input to this component
*/
export class ReportComponent implements OnInit {

  @Input() weatherReport: object;
  ngOnInit() {}

}
