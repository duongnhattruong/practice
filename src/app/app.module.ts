// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { authReducer, AuthEffects } from './store/auth';
import { AppRoutingModule } from './app-routing.module';
import { StoreOwnerComponent } from './modules/store-owner/store-owner.component'; // Import the AppRoutingModule
import { ProductsEffects, productsReducer } from './store/products';
import { HomeComponent } from './modules/home/home.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, StoreOwnerComponent, HomeComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ auth: authReducer, products: productsReducer }),
    EffectsModule.forRoot([AuthEffects, ProductsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
    }),
    AppRoutingModule // Add the AppRoutingModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}