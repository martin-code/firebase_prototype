import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteparentComponent } from './siteparent.component';

describe('SiteparentComponent', () => {
  let component: SiteparentComponent;
  let fixture: ComponentFixture<SiteparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
