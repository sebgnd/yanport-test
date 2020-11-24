import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VacumPositionCalculatorComponent } from './components/vacum-position-calculator/vacum-position-calculator.component';
import { MainWindowComponent } from './components/main-window/main-window.component';
import { NewVacumPositionComponent } from './components/new-vacum-position/new-vacum-position.component';
import { VacumPositionItemComponent } from './components/new-vacum-position/vacum-position-item/vacum-position-item.component';
import { GridComponent } from './components/grid/grid.component';
import { GridSquareComponent } from './components/grid/grid-square/grid-square.component';

@NgModule({
  declarations: [
    AppComponent,
    VacumPositionCalculatorComponent,
    MainWindowComponent,
    NewVacumPositionComponent,
    VacumPositionItemComponent,
    GridComponent,
    GridSquareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
