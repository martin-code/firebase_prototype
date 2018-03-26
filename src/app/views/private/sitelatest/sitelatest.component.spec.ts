import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitelatestComponent } from './sitelatest.component';

describe('SitelatestComponent', () => {
  let component: SitelatestComponent;
  let fixture: ComponentFixture<SitelatestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitelatestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitelatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
