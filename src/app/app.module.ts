import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { VacumPositionCalculatorComponent } from './vacum-position-calculator/vacum-position-calculator.component';
import { MainWindowComponent } from './main-window/main-window.component';
import { NewVacumPositionComponent } from './new-vacum-position/new-vacum-position.component';
import { VacumPositionItemComponent } from './new-vacum-position/vacum-position-item/vacum-position-item.component';

@NgModule({
  declarations: [
    AppComponent,
    VacumPositionCalculatorComponent,
    MainWindowComponent,
    NewVacumPositionComponent,
    VacumPositionItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
