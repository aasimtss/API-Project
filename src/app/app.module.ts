import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './compon/home/home.component';
import { SearchBarComponent } from './compon/search-bar/search-bar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpHeadersInterceptor } from './interceptors/http-headers.interceptor';
import { HttpErrorInterceptor } from './interceptors/http-errors.interceptor';
import { DetailsComponent } from './compon/details/details.component';
import { GaugeModule } from 'angular-gauge';
import { AuthComponent } from './compon/auth/auth.component';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './auth.guard';
import { ContactComponent } from './compon/contact/contact.component';
import { MatButtonModule } from '@angular/material/button';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FooterComponent } from './compon/footer/footer.component';
import { AlertComponent } from './compon/alert/alert.component';
import { TestingComponent } from './compon/testing/testing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    HomeComponent,
    SearchBarComponent,
    DetailsComponent,
    AuthComponent,
    ContactComponent,
    FooterComponent,
    AlertComponent,
    TestingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    GaugeModule.forRoot(),
    NgxSpinnerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeadersInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
