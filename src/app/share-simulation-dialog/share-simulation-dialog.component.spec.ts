import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareSimulationDialogComponent } from './share-simulation-dialog.component';

describe('ShareSimulationDialogComponent', () => {
  let component: ShareSimulationDialogComponent;
  let fixture: ComponentFixture<ShareSimulationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareSimulationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareSimulationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
