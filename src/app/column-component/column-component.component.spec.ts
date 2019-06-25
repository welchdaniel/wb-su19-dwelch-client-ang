import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnComponentComponent } from './column-component.component';

describe('ColumnComponentComponent', () => {
  let component: ColumnComponentComponent;
  let fixture: ComponentFixture<ColumnComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
