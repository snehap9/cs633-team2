import { MenuComponent } from './menu/menu.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import { MenuItemDetailsComponent } from './menu-item-details/menu-item-details.component';

const appRoutes: Routes = [
  {
      path: '',
      pathMatch: 'full',
      component: MenuComponent
  },  
  {
      path: 'shopping-cart',
      component: ShoppingCartComponent
  },
  { path: 'items/:itemId', component: MenuItemDetailsComponent },
  ];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ShoppingCartComponent,
    HeaderBarComponent,
    MenuItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatDividerModule
  ],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
