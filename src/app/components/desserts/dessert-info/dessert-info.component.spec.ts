import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertInfoComponent } from './dessert-info.component';

describe('DessertInfoComponent', () => {
  let component: DessertInfoComponent;
  let fixture: ComponentFixture<DessertInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DessertInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DessertInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
