import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShortParaComponent } from './short-para.component';

describe('ShortParaComponent', () => {
  let component: ShortParaComponent;
  let fixture: ComponentFixture<ShortParaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortParaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortParaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
