import { Component } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // 綁定在帳號欄位上
  account = '';

  // 綁定在密碼欄位上
  password = '';

  // 帳號欄位的錯誤訊息
  accountErrorMessage = '';

  // 密碼欄位的錯誤訊息
  passwordErrorMessage = '';

  /**
   * 綁定在帳號欄位上，當使用者改變登入帳號時，會觸發此函式，並取得對應的錯誤訊息
   *
   * @param {string} account
   * @param {ValidationErrors} errors
   * @memberof AppComponent
   */
  accountValueChange(account: string, errors: ValidationErrors): void {
    this.account = account;
    this.validationCheck(errors, 'account');
  }

  /**
   * 綁定在密碼欄位上，當使用者改變密碼時會觸發此函式
   *
   * @param {string} password
   * @param {ValidationErrors} errors
   * @memberof AppComponent
   */
  passwordValueChange(password: string, errors: ValidationErrors): void {
    this.password = password;
    this.validationCheck(errors, 'password');
  }

  // 綁定在表單上，當使用者按下登入按鈕時會觸發此函式
  login(): void {
    // do Login...
  }

  /**
   * 透過欄位裡的 ValidationErrors 來設定該欄位的錯誤訊息
   *
   * @private
   * @param {ValidationErrors} errors - 欲驗證的錯誤欄位 (by Angular)
   * @param {('account' | 'password')} fieldName - 欄位名稱
   * @memberof AppComponent
   */
  private validationCheck(
    errors: ValidationErrors,
    fieldName: 'account' | 'password'
  ): void {
    let errorMessage: string;
    if (!errors) {
      errorMessage = '';
    } else if (errors.required) {
      errorMessage = '此欄位必填';
    } else if (errors.pattern) {
      errorMessage = '格式有誤，請重新輸入';
    } else if (errors.minlength) {
      errorMessage = '密碼長度最短不得低於8碼';
    }
    this.setErrorMessage(fieldName, errorMessage);
  }

  /**
   * 設定指定欄位的錯誤訊息
   *
   * @private
   * @param {('account' | 'password')} fieldName - 欲設定錯誤訊息的欄位名稱
   * @param {string} errorMessage - 欲設定的錯誤訊息
   * @memberof AppComponent
   */
  private setErrorMessage(
    fieldName: 'account' | 'password',
    errorMessage: string
  ): void {
    if (fieldName === 'account' ) {
      this.accountErrorMessage = errorMessage;
    } else {
      this.passwordErrorMessage = errorMessage;
    }
  }
}
