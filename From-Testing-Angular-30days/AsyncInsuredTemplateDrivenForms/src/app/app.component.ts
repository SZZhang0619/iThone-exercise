import { Component, QueryList, ViewChildren } from '@angular/core';
import { NgModel, ValidationErrors } from '@angular/forms';
import { Insured } from './insured.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChildren('nameNgModel') nameNgModelRefList!: QueryList<NgModel>;
  @ViewChildren('ageNgModel') ageNgModelRefList!: QueryList<NgModel>;

  // 被保險人清單
  insuredList: Insured[] = [];


  /**
   * 綁定在姓名欄位上，當使用者改變被保險人的姓名時，會觸發此函式，並取得對應的錯誤訊息
   *
   * @param {string} name
   * @param {(ValidationErrors | null)} errors
   * @param {Insured} insured
   * @memberof AppComponent
   */
  insuredNameChange(name: string, errors: ValidationErrors | null, insured: Insured): void {
    console.log('[Check]name:',name);
    insured.name = name;
    insured.nameErrorMessage = this.getErrorMessage(errors);
  }

  /**
   * 綁定在年齡欄位上，當使用者改變被保險人的年齡時，會觸發此函式，並取得對應的錯誤訊息
   *
   * @param {string} age
   * @param {(ValidationErrors | null)} errors
   * @param {Insured} insured
   * @memberof AppComponent
   */
  insuredAgeChange(age: string, errors: ValidationErrors | null, insured: Insured): void {
    insured.age = age;
    insured.ageErrorMessage = this.getErrorMessage(errors);
  }

  /**
   * 綁定在表單上，當按下送出按鈕時會觸發此函式
   *
   * @memberof AppComponent
   */
  submit(): void {
    // do submit...
  }

  /**
   * 根據 FormControl 的 errors 屬性取得相應的錯誤訊息
   *
   * @private
   * @param {(ValidationErrors | null)} errors
   * @return {*}  {string}
   * @memberof AppComponent
   */
  private getErrorMessage(errors: ValidationErrors | null): string {
    let errorMessage = '';
    if (errors?.required) {
      errorMessage = '此欄位必填';
    } else if (errors?.minlength) {
      errorMessage = '姓名至少需兩個字以上';
    }
    return errorMessage;
  }

  /**
   * 新增被保險人
   *
   * @memberof AppComponent
   */
  addInsured(): void {
    const insured: Insured = {
      name: '',
      gender: '',
      age: '',
      nameErrorMessage: '',
      ageErrorMessage: ''
    };
    this.insuredList.push(insured);
  }

  /**
   * 刪除被保險人
   *
   * @param {number} index
   * @memberof AppComponent
   */
  deleteInsured(index: number): void {
    this.insuredList.splice(index, 1);
  }

  /**
   * 根據索引來重新渲染有更改的節點
   *
   * @param {number} index
   * @return {*}  {number}
   * @memberof AppComponent
   */
  trackByIndex(index: number): number {
    return index;
  }
}
