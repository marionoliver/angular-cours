import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListElevesComponent } from './list-eleves.component';

describe('ListElevesComponent', () => {
  let component: ListElevesComponent;
  let fixture: ComponentFixture<ListElevesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListElevesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListElevesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
