import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRateComponent } from './top-rate.component';

describe('TopRateComponent', () => {
  let component: TopRateComponent;
  let fixture: ComponentFixture<TopRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopRateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
