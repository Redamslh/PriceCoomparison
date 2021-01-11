import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectDetailsComponent } from './elect-details.component';

describe('ElectDetailsComponent', () => {
  let component: ElectDetailsComponent;
  let fixture: ComponentFixture<ElectDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
