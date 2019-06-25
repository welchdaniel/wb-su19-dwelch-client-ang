import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnToolbarComponentComponent } from './column-toolbar-component.component';

describe('ColumnToolbarComponentComponent', () => {
  let component: ColumnToolbarComponentComponent;
  let fixture: ComponentFixture<ColumnToolbarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnToolbarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnToolbarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
