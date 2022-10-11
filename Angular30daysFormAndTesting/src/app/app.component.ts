import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // 綁定在表單上
  formGroup: FormGroup;

  /**
   * 用以取得帳號欄位的表單控制項
   */
  get accountControl(): FormControl {
    return this.formGroup.get('account') as FormControl;
  }

  /**
   * 用以取得密碼欄位的表單控制項
   */
  get passwordControl(): FormControl {
    return this.formGroup.get('password') as FormControl;
  }

  /**
   * 透過 DI 取得 FomrBuilder 物件，用以建立表單
   */
  constructor(private formBuilder: FormBuilder) {}

  /**
   * 當 Component 初始化的時候初始化表單
   */
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      account: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b$/gi)
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16)
        ]
      ]
    });
  }

  // 綁定在表單上，當使用者按下登入按鈕時會觸發此函式
  login(): void {
    // do login...
  }

  /**
   * 透過該欄位的表單控制項來取得該欄位的錯誤訊息
   *
   * @param {FormControl} formControl - 欲取得錯誤訊息的欄位的表單控制項(by Angular)
   * @return {*}  {string}
   * @memberof AppComponent
   */
  getErrorMessage(formControl: FormControl): string {
    let errorMessage: string;
    if(!formControl.errors || formControl.pristine) {
      errorMessage = '';
    } else if (formControl.errors.required) {
      errorMessage = '此欄位必填';
    } else if (formControl.errors.pattern) {
      errorMessage = '格式有誤，請重新輸入'
    } else if (formControl.errors.minlength) {
      errorMessage = '密碼長度最短不得低於8碼';
    } else if (formControl.errors.maxlength) {
      errorMessage = '密碼長度最長不得超過16碼'
    }
    return errorMessage;
  }
}
