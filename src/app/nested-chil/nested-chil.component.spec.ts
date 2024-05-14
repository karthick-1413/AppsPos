import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedChilComponent } from './nested-chil.component';

describe('NestedChilComponent', () => {
  let component: NestedChilComponent;
  let fixture: ComponentFixture<NestedChilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedChilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedChilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
