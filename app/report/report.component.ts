import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.less']
})
export class ReportComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  @Input() weatherReport: object;
  reports: object;
  ngOnInit() {}

  

}
