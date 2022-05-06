import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PkgLayoutThreeComponent } from './pkg-layout-three.component';

describe('PkgLayoutThreeComponent', () => {
  let component: PkgLayoutThreeComponent;
  let fixture: ComponentFixture<PkgLayoutThreeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PkgLayoutThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PkgLayoutThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
