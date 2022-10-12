import { FormControl, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;

  let fixture: ComponentFixture<AppComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        ReactiveFormsModule
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  describe('getErrorMessage', () => {
    // 這裡面的測試案例都是要測這個函式
    it('should get empty string when the value is correct', () => {
      // Arrange
      const formControl = new FormControl('');
      const expectedMessage = '';
      // Act
      const message = component.getErrorMessage(formControl);
      // Assert
      expect(message).toBe(expectedMessage);
    });

    it('should get empty string when the value is empty string but the form control is pristine', () => {
      // Arrange
      const formControl = new FormControl('', [Validators.required]);
      const expectedMessage = '';
      // Act
      const message = component.getErrorMessage(formControl);
      // Assert
      expect(message).toBe(expectedMessage);
    })

    it('should get "此欄位必填" when the value is empty string but the form control', () => {
      // Arrange
      const formControl = new FormControl('', [Validators.required]);
      const expectedMessage = '此欄位必填'
      // Act
      formControl.markAsDirty();
      const message = component.getErrorMessage(formControl);
      // Assert
      expect(message).toBe(expectedMessage);
    });

    it('should get "格式有誤，請重新輸入" when the value is empty string but the form control', () => {
      // Arrange
      const formControl = new FormControl('whatever', [Validators.pattern('/^\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b$/gi')]);
      const expectedMessage = '格式有誤，請重新輸入';
      // Act
      formControl.markAsDirty();
      const message = component.getErrorMessage(formControl);
      // Assert
      expect(message).toBe(expectedMessage);
    });

    it('should get "密碼長度最短不得低於8碼" when the value is empty string but the form control', () => {
      // Arrange
      const formControl = new FormControl('abc', [Validators.minLength(8)]);
      const expectedMessage = '密碼長度最短不得低於8碼';
      // Act
      formControl.markAsDirty();
      const message = component.getErrorMessage(formControl);
      // Assert
      expect(message).toBe(expectedMessage);
    })

    it('should get "密碼長度最長不得超過16碼" when the value is empty string but the form control', () => {
      // Arrange
      const formControl = new FormControl('12345678901234567', [Validators.maxLength(16)]);
      const expectedMessage = '密碼長度最長不得超過16碼';
      // Act
      formControl.markAsDirty();
      const message = component.getErrorMessage(formControl);
      // Assert
      expect(message).toBe(expectedMessage);
    });
  });

  describe('formGroup', () => {
    it('should be undefined before init', () => {
      // Assert
      expect(component.formGroup).toBeFalsy();
    })

    describe('after ngInit', () => {

      beforeEach(() => {
        fixture.detectChanges();
      });

      it('should be instance of FormGroup', () => {
        // Assert
        expect(component.formGroup).toBeInstanceOf(FormGroup);
      })

      it('should have 2 form contorls', () => {
        // Arrange
        const formControls = component.formGroup.controls;
        const controlLength = Object.keys(formControls).length;
        // Assert
        expect(controlLength).toBe(2);
      });

      describe('accountFormContorl',() => {

        it('should have the required validator', () => {
          // Arrange
          const error = component.accountControl.errors;
          // Assert
          expect(error.required).toBe(true);
        });

        it('should hava the email pattern validator', () => {
          // Arrange
          component.accountControl.setValue('abc');
          const error = component.accountControl.errors;
          const expectedPattern = '/^\\b[\\w\\.-]+@[\\w\\.-]+\\.\\w{2,4}\\b$/gi';

          // Assert
          expect(error.pattern.requiredPattern).toBe(expectedPattern);
        })
      });

      describe('passwordFormControl', () => {

        it('should have the required validator', () => {
          // Arrange
          const error = component.passwordControl.errors;
          // Assert
          expect(error.required).toBe(true);
        });

        it('should have the min-length validator', () => {
          // Arrange
          component.passwordControl.setValue('abc');
          const error = component.passwordControl.errors;
          // Assert
          expect(error.minlength.requiredLength).toBe(8);
        })

        it('should have max-length validator', () => {
          // Arrange
          component.passwordControl.setValue('12345678901234567');
          const error = component.passwordControl.errors;
          // Assert
          expect(error.maxlength.requiredLength).toBe(16);
        })
      });
    });
  });
});
