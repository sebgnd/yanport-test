import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VacuumPositionCalculatorComponent } from './components/vacuum-position-calculator/vacuum-position-calculator.component';
import { MainWindowComponent } from './components/main-window/main-window.component';
import { GridComponent } from './components/grid/grid.component';
import { GridSquareComponent } from './components/grid/grid-square/grid-square.component';
import { VacumPositionComponent } from './components/vacuum-position/vacuum-position.component';

@NgModule({
  declarations: [
    AppComponent,
    VacuumPositionCalculatorComponent,
    MainWindowComponent,
    GridComponent,
    GridSquareComponent,
    VacumPositionComponent
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
