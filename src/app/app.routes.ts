import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'home',
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
    title: 'about',
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services.component').then(
        (m) => m.ServicesComponent
      ),
    title: 'services',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
    title: 'contact',
  },
  {
    path: 'category',
    loadComponent: () =>
      import('./pages/category/category.component').then(
        (m) => m.CategoryComponent
      ),
    title: 'contact',
  },

  {
    path: 'catergory',
    loadComponent: () =>
      import('./pages/category/category.component').then(
        (m) => m.CategoryComponent
      ),
    title: 'catergory',
  },

  {
    path: 'products',
    loadComponent: () =>
      import('./pages/products/products.component').then(
        (m) => m.ProductsComponent
      ),
    title: 'products',
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./pages/cart/cart.component').then((m) => m.CartComponent),
    title: 'cart',
  },

  {
    path: 'category-product',
    loadComponent: () =>
      import(
        './pages/category-group-products/category-group-products.component'
      ).then((m) => m.CategoryGroupProductsComponent),
    data: { renderMode: 'browser' }, // 👈 مهم علشان Vercel ما يشتكيش
  },

  { path: '**', redirectTo: 'home' },
];
