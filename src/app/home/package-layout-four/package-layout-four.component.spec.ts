import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PackageLayoutFourComponent } from './package-layout-four.component';

describe('PackageLayoutFourComponent', () => {
  let component: PackageLayoutFourComponent;
  let fixture: ComponentFixture<PackageLayoutFourComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageLayoutFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageLayoutFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
