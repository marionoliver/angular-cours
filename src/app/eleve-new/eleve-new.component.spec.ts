import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EleveNewComponent } from './eleve-new.component';

describe('EleveNewComponent', () => {
  let component: EleveNewComponent;
  let fixture: ComponentFixture<EleveNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EleveNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EleveNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
