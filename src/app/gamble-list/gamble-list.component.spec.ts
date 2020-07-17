import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GambleListComponent } from './gamble-list.component';

describe('GambleListComponent', () => {
  let component: GambleListComponent;
  let fixture: ComponentFixture<GambleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GambleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GambleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
