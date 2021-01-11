import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectAddComponent } from './elect-add.component';

describe('ElectAddComponent', () => {
  let component: ElectAddComponent;
  let fixture: ComponentFixture<ElectAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
