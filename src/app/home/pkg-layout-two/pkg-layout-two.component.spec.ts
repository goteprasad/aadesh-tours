import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PkgLayoutTwoComponent } from './pkg-layout-two.component';

describe('PkgLayoutTwoComponent', () => {
  let component: PkgLayoutTwoComponent;
  let fixture: ComponentFixture<PkgLayoutTwoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PkgLayoutTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PkgLayoutTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
