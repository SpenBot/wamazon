import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAllGridComponent } from './inventory-all-grid.component';

describe('InventoryAllGridComponent', () => {
  let component: InventoryAllGridComponent;
  let fixture: ComponentFixture<InventoryAllGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryAllGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryAllGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
