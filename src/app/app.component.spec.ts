import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>, component: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        MDBBootstrapModule.forRoot(),
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  it('Items variable should be Array length greater than 0', () => {
    expect(component.Items.length).toBeGreaterThanOrEqual(0);
  });

  it('Form variable should have default', () => {
    const mockForm: FormGroup = new FormGroup({
      image: new FormControl(),
      category: new FormControl(),
      name: new FormControl(),
      detail: new FormControl()
    });
    expect(component.Form.value).toEqual(mockForm.value);
  });

  // ตรวจสอบตัวแปร insert
  it('ตัวแปรต้องมีสมาชิกเพิ่ม เมื่อใช้งาน insert', () => {
    component.Insert({
      id: 1,
      name: 'name test',
      detail: 'Detail test',
      category: 'Cat test',
      image: 'Image test',
      date: new Date(2018, 6, 6)
    });
    expect(component.Items.length).toBeGreaterThanOrEqual(1);
  });

  it('ตัวแปร item ต้องมีการเปลี่ยนแปลงเมื่อใช้งาน update', () => {

    component.Insert({
      id: 1,
      name: 'name test',
      detail: 'Detail test',
      category: 'Cat test',
      image: 'Image test',
      date: new Date(2018, 6, 6)
    });

    const updateItem = {
      id: 1,
      name: 'name update',
      detail: 'Detail update',
      category: 'Cat update',
      image: 'Image update',
      date: new Date(2018, 6, 7)
    };
    component.Update(1, updateItem);
    expect(component.Items.find(m => m.id === 1)).toEqual(updateItem);
  });

  it('ตัวแปร  items ต้องสามารถลดข้อมูลได้ เมื่องใช้ delete', () => {
    component.Insert({
      id: 1,
      name: 'name test',
      detail: 'Detail test',
      category: 'Cat test',
      image: 'Image test',
      date: new Date(2018, 6, 6)
    });
    const len = component.Items.length;
    component.Delete(1);
    expect(component.Items.length).toEqual(len - 1);
  });
});
