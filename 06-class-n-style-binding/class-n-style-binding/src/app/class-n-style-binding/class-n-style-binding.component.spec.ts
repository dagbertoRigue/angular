import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassNStyleBindingComponent } from './class-n-style-binding.component';

describe('ClassNStyleBindingComponent', () => {
  let component: ClassNStyleBindingComponent;
  let fixture: ComponentFixture<ClassNStyleBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassNStyleBindingComponent]
    });
    fixture = TestBed.createComponent(ClassNStyleBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
