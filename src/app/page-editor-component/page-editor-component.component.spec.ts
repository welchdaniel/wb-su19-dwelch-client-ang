import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditorComponentComponent } from './page-editor-component.component';

describe('PageEditorComponentComponent', () => {
  let component: PageEditorComponentComponent;
  let fixture: ComponentFixture<PageEditorComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEditorComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEditorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
