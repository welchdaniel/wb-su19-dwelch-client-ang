import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetEditorComponentComponent } from './widget-editor-component.component';

describe('WidgetEditorComponentComponent', () => {
  let component: WidgetEditorComponentComponent;
  let fixture: ComponentFixture<WidgetEditorComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetEditorComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetEditorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
