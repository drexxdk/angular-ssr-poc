import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsrButtonComponent } from './ssr-button.component';

describe('SsrButtonComponent', () => {
  let component: SsrButtonComponent;
  let fixture: ComponentFixture<SsrButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsrButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsrButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
