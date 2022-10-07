import { appPath } from './../app-path.const';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  /**
   * 給Template用的路由定義
   *
   * @memberof AppComponent
   */
  path = appPath

  constructor() { }

  ngOnInit(): void {
  }

}
