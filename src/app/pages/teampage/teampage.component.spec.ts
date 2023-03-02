import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeampageComponent } from './teampage.component';

describe('TeampageComponent', () => {
  let component: TeampageComponent;
  let fixture: ComponentFixture<TeampageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeampageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeampageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
