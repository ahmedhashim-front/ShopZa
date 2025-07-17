import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryGroupProductsComponent } from './category-group-products.component';

describe('CategoryGroupProductsComponent', () => {
  let component: CategoryGroupProductsComponent;
  let fixture: ComponentFixture<CategoryGroupProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryGroupProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryGroupProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
