import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFanComponent } from './detail-fan.component';

describe('DetailFanComponent', () => {
  let component: DetailFanComponent;
  let fixture: ComponentFixture<DetailFanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailFanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
