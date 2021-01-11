import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectListComponent } from './elect-list.component';

describe('ElectListComponent', () => {
  let component: ElectListComponent;
  let fixture: ComponentFixture<ElectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
