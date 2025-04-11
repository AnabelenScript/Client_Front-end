import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertsMenuComponent } from './desserts-menu.component';

describe('DessertsMenuComponent', () => {
  let component: DessertsMenuComponent;
  let fixture: ComponentFixture<DessertsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DessertsMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DessertsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
