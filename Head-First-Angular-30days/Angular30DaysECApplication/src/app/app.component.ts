import { appPath } from './app-path.const';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   * 給Template用的路由定義
   *
   * @memberof AppComponent
   */
  path = appPath
}
