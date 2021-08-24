import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MatSelectModule } from '@angular/material/select';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule, MatSortModule, MatIconModule, MatTabsModule, MatInputModule,
  MatSlideToggleModule, MatToolbarModule, MatButtonModule, MatSidenavModule,
  MatListModule, MatPaginatorModule, MatFormFieldModule, MatMenuModule,
  MatGridListModule, MatRadioModule, MatCardModule, MatDialogModule,
  MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MAT_DATE_LOCALE, MatButtonToggleModule,
  MatAutocompleteModule, MatExpansionModule } from '@angular/material';

import { LayoutModule } from '@angular/cdk/layout';
import { InvitacionComponent } from './component/invitacion/invitacion.component';

@NgModule({
  declarations: [
    AppComponent,
    InvitacionComponent
  ],
  imports: [
    
    BrowserModule,
    MatSelectModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatTabsModule,
    MatInputModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatMenuModule,
    MatGridListModule,
    MatRadioModule,
    MatCardModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatAutocompleteModule,
    MatExpansionModule,
    LayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
