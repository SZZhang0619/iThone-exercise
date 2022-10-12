import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  /**
   * 綁定在表單上
   *
   * @type {(FormGroup | undefined)}
   * @memberof AppComponent
   */
  formGroup: FormGroup | undefined;

  /**
   * 用以取得 FormArray
   *
   * @readonly
   * @type {FormArray}
   * @memberof AppComponent
   */
  get formArray(): FormArray {
    return this.formGroup?.get('insuredList') as FormArray;
  }

  /**
   * 綁定在送出按鈕上，判斷表單是不是無效
   *
   * @readonly
   * @type {boolean}
   * @memberof AppComponent
   */
  get isFormInvalid(): boolean {
    return this.formArray.controls.length === 0 || this.formGroup!.invalid;
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      insuredList: this.formBuilder.array([])
    });
  }

  /**
   * 新增被保人
   *
   * @memberof AppComponent
   */
  addInsured(): void {
    const formGroup = this.createInsuredFormGroup();
    this.formArray.push(formGroup);
  }

  /**
   * 刪除被保人
   *
   * @param {number} index
   * @memberof AppComponent
   */
  deleteInsured(index: number): void {
    this.formArray.controls.splice(index, 1);
    this.formArray.updateValueAndValidity();
  }

  /**
   * 透過欄位的 Errors 來取得對應的錯誤訊息
   *
   * @param {string} key
   * @param {number} index
   * @return {*}  {string}
   * @memberof AppComponent
   */
  getErrorMessage(key: string, index: number): string {
    const formGroup = this.formArray.controls[index]
    const formControl = formGroup.get(key);
    let errorMessage: string;
    if (!formControl || !formControl.errors || formControl.pristine) {
      errorMessage = '';
    } else if (formControl.errors.required) {
      errorMessage = '此欄位必填';
    } else if (formControl.errors.minlength) {
      errorMessage = '姓名至少需兩個字以上';
    } else if (formControl.errors.maxlength) {
      errorMessage = '姓名至多只能輸入十個字';
    }
    return errorMessage!;
  }

  /**
   * 建立被保人的表單
   *
   * @private
   * @return {*}  {FormGroup}
   * @memberof AppComponent
   */
  private createInsuredFormGroup(): FormGroup {
    return this.formBuilder.group({
      name: [
        '',
        [Validators.required, Validators.minLength(2), Validators.maxLength(10)]
      ],
      gender: ['', Validators.required],
      age: ['', Validators.required]
    });
  }

  /**
   * 綁定在表單上，當按下送出按鈕時會觸發此函式
   *
   * @memberof AppComponent
   */
  submit(): void {
    // do submit...
  }
}
