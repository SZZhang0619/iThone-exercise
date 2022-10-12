import { Insured } from './insured.type';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
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
        FormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  describe('trackByIndex', () => {
    it('should just return the index', () => {
      // Arrange
      const index = 0;
      // Assert
      expect(component.trackByIndex(index)).toBe(index);
    });
  });

  describe('insuredNameChange', () => {
    let insured: Insured;

    beforeEach(() => {
      insured = {
        name: '',
        gender: '',
        age: '',
        nameErrorMessage: '',
        ageErrorMessage: ''
      };
    });

    it('should assign the value of the formControl to property "name" of the insured', () => {
      // Arrange
      const value = 'Frank';
      const errors = null;
      // Act
      component.insuredNameChange(value,errors,insured);
      // Assert
      expect(insured.name).toBe(value);
    });

    it('should assign error message "此欄位必填" to property "nameErrorMessage" of the insured when the value of the formControl is empty string', () => {
      // Arrange
      const value = '';
      const errors = { required: true };
      const errorMessage = '此欄位必填'
      // Act
      component.insuredNameChange(value,errors,insured);
      // Assert
      expect(insured.nameErrorMessage).toBe(errorMessage);
    })

    it('should assign error message "姓名至少需兩個字以上" to property "nameErrorMessage" of the insured when the value\;s length of the formControl less than 2', () => {
      // Arrange
      const value = 'L';
      const errors = {
        minlength: {
          actualLength: 1,
          requiredLength: 2
        }
      };
      const errorMessage = '姓名至少需兩個字以上';
      // Act
      component.insuredNameChange(value, errors, insured);
      // Assert
      expect(insured.nameErrorMessage).toBe(errorMessage);
    });
  });

  describe('insuredAgeChange', () => {
    let insured: Insured;

    beforeEach(() => {
      insured = {
        name: '',
        gender: '',
        age: '',
        nameErrorMessage: '',
        ageErrorMessage: ''
      };
    });

    it('should assign the value of the formControl to property "age" of the insured', () => {
      // Arrange
      const age = '18';
      const errors = null;
      // Act
      component.insuredAgeChange(age, errors, insured);
      // Assert
      expect(insured.age).toBe(age);
    });

    it('should assign error message "此欄位必填" to property "ageErrorMessage" of the insured when the value of the formControl is empty string', () => {
      // Arrange
      const age = '';
      const errors = { required: true };
      const errorMessage = '此欄位必填';
      // Act
      component.insuredAgeChange(age, errors, insured);
      // Assert
      expect(insured.ageErrorMessage).toBe(errorMessage);
    });
  });

  describe('addInsured', () => {
    it('should add a new insured data into property "insuredList" after being triggered', () => {
      // Arragne
      const expectResult: Insured[] = [{
        name: '',
        gender: '',
        age: '',
        nameErrorMessage: '',
        ageErrorMessage: ''
      }];
      // Act
      component.addInsured();
      // Assert
      expect(component.insuredList).toEqual(expectResult);
    });
  });

  describe('deleteInsured', () => {
    it('should delete the insured data by the index after being triggered', () => {
      // Arrange
      component.insuredList = [{
        name: '',
        gender: '',
        age: '',
        nameErrorMessage: '',
        ageErrorMessage: ''
      }];
      // Act
      component.deleteInsured(0);
      // Assert
      expect(component.insuredList).toEqual([]);
    });

  });
});
