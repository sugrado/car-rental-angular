import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';
import { NaviComponent } from './components/navi/navi.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';

import { BrandFilterPipe } from './pipes/brand-filter.pipe';
import { ColorFilterPipe } from './pipes/color-filter.pipe';
import { RentComponent } from './components/rent/rent.component';

import { ToastrModule } from 'ngx-toastr';
import { BrandDetailComponent } from './components/brand/brand-detail/brand-detail.component';
import { ColorDetailComponent } from './components/color/color-detail/color-detail.component';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/brand/brand-update/brand-update.component';
import { BrandDeleteComponent } from './components/brand/brand-delete/brand-delete.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { ColorDeleteComponent } from './components/color/color-delete/color-delete.component';
import { ColorUpdateComponent } from './components/color/color-update/color-update.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarAddComponent } from './components/car-list/car-add/car-add.component';
import { CarUpdateComponent } from './components/car-list/car-update/car-update.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    CarComponent,
    RentalComponent,
    NaviComponent,
    CustomerComponent,
    CarDetailComponent,
    BrandFilterPipe,
    ColorFilterPipe,
    RentComponent,
    BrandDetailComponent,
    ColorDetailComponent,
    BrandAddComponent,
    BrandUpdateComponent,
    BrandDeleteComponent,
    ColorAddComponent,
    ColorDeleteComponent,
    ColorUpdateComponent,
    CarListComponent,
    CarAddComponent,
    CarUpdateComponent,
    CreditCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
