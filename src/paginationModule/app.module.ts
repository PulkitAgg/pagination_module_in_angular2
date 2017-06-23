// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
// import { AppComponent } from './app.component';
import { PaginationComponent } from './pagination/pagination.component';
// import { TestComponent } from './test/test.component';
// import { PaginationDirective } from './pagination.directive';

@NgModule({
  declarations: [
    // AppComponent,
    PaginationComponent
    // TestComponent,
    // PaginationDirective
  ],
  imports: [
    // BrowserModule,
    // FormsModule,
    // HttpModule,
    CommonModule
  ],
  providers: [],
  exports: [PaginationComponent]
})
export class PaginationModule { }
