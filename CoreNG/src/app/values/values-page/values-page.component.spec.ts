import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuesPageComponent } from './values-page.component';

describe('ValuesPageComponent', () => {
  let component: ValuesPageComponent;
  let fixture: ComponentFixture<ValuesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
