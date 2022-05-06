import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PkgLayoutOneComponent } from './pkg-layout-one.component';

describe('PkgLayoutOneComponent', () => {
  let component: PkgLayoutOneComponent;
  let fixture: ComponentFixture<PkgLayoutOneComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PkgLayoutOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PkgLayoutOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
