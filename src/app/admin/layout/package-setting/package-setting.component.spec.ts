import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PackageSettingComponent } from './package-setting.component';

describe('PackageSettingComponent', () => {
  let component: PackageSettingComponent;
  let fixture: ComponentFixture<PackageSettingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
