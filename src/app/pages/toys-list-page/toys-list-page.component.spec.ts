import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToysListPageComponent } from './toys-list-page.component';

describe('ToysListPageComponent', () => {
  let component: ToysListPageComponent;
  let fixture: ComponentFixture<ToysListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToysListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToysListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
