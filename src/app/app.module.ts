import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CustomerOverviewComponent } from './components/customer-overview/customer-overview.component';
import { OtherViewsComponent } from './components/other-views/other-views.component';
import { NavbarItemComponent } from './components/navbar-item/navbar-item.component';
import {CustomerOverviewSearch} from "./components/customer-overview/customer-overview-search";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    CustomerOverviewComponent,
    OtherViewsComponent,
    NavbarItemComponent,
    CustomerOverviewSearch
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
