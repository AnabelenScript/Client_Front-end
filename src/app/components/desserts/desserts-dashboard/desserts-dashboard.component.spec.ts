import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertsDashboardComponent } from './desserts-dashboard.component';

describe('DessertsDashboardComponent', () => {
  let component: DessertsDashboardComponent;
  let fixture: ComponentFixture<DessertsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DessertsDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DessertsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
