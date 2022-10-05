import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * 按下登入的按鈕時會觸發的函式
   *
   * @memberof LoginComponent
   */
  login(): void {

    this.router.navigate([''], {
      queryParams: {
        name: 'Frank'
      }
    });
  }

}
