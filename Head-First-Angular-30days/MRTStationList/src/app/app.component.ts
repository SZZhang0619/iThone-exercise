import { stationList } from './station-list.const';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MRTStationList';
  list = stationList;
  condition = false;
}

