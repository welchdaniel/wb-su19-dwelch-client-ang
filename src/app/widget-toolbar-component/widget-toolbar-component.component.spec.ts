import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetToolbarComponentComponent } from './widget-toolbar-component.component';

describe('WidgetToolbarComponentComponent', () => {
  let component: WidgetToolbarComponentComponent;
  let fixture: ComponentFixture<WidgetToolbarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetToolbarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetToolbarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
