import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteListComponentComponent } from './website-list-component.component';

describe('WebsiteListComponentComponent', () => {
  let component: WebsiteListComponentComponent;
  let fixture: ComponentFixture<WebsiteListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
