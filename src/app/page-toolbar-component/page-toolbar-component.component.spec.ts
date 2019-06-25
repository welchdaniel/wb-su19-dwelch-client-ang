import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageToolbarComponentComponent } from './page-toolbar-component.component';

describe('PageToolbarComponentComponent', () => {
  let component: PageToolbarComponentComponent;
  let fixture: ComponentFixture<PageToolbarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageToolbarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageToolbarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
