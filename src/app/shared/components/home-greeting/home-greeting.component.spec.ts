import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGreetingComponent } from './home-greeting.component';

describe('HomeGreetingComponent', () => {
  let component: HomeGreetingComponent;
  let fixture: ComponentFixture<HomeGreetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeGreetingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeGreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
