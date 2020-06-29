import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatesValuesDialogComponent } from './rates-values-dialog.component';

describe('RatesValuesDialogComponent', () => {
  let component: RatesValuesDialogComponent;
  let fixture: ComponentFixture<RatesValuesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatesValuesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatesValuesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
