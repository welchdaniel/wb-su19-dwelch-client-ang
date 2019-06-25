import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListComponentComponent } from './page-list-component.component';

describe('PageListComponentComponent', () => {
  let component: PageListComponentComponent;
  let fixture: ComponentFixture<PageListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
