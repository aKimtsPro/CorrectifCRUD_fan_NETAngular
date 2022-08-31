import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFanComponent } from './list-fan.component';

describe('ListFanComponent', () => {
  let component: ListFanComponent;
  let fixture: ComponentFixture<ListFanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
