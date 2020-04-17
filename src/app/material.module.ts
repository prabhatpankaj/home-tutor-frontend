import { NgModule } from '@angular/core';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatExpansionModule, MatTreeModule, MatTableModule, MatSnackBarModule, MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatDialogModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatSidenavModule, MatListModule, MatTooltipModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
 
    imports: [
        FormsModule,
        BrowserModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
      MatExpansionModule,
      MatTreeModule,
      MatTableModule,
      MatSnackBarModule,
      HttpClientModule,
      MatToolbarModule,
      MatButtonModule,
     ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
      MatCardModule,
      MatInputModule,
      MatDialogModule,
      MatTableModule,
      MatMenuModule,
      MatIconModule,
      MatProgressSpinnerModule,
      MatSidenavModule,
      MatListModule,
      MatTooltipModule,
      ReactiveFormsModule,
      MatSelectModule,
      MatDatepickerModule,
      MatNativeDateModule,
      AppRoutingModule,
      
    ],
  
    exports: [
  
        FormsModule,
        BrowserModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
      MatExpansionModule,
      MatTreeModule,
      MatTableModule,
      MatSnackBarModule,
      HttpClientModule,
      MatToolbarModule,
      MatButtonModule,
     ReactiveFormsModule,
      MatCardModule,
      MatInputModule,
      MatDialogModule,
      MatTableModule,
      MatMenuModule,
      MatIconModule,
      MatProgressSpinnerModule,
      MatSidenavModule,
      MatListModule,
      MatTooltipModule,
      ReactiveFormsModule,
      MatSelectModule,
      MatDatepickerModule,
      MatNativeDateModule,
      AppRoutingModule,
      
    ],
   
  })
  export class MaterialModule {
  }
  