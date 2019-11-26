import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleOnlineComponent } from './saleOnline.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ResultSearchComponent } from '../resultSearch/resultSearch.component';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AddEditComponent } from '../add-edit/add-edit.component';
import { CalendarModule } from 'primeng/calendar';
import {InputSwitchModule} from 'primeng/inputswitch';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
@NgModule({
  imports: [
    CommonModule, DropdownModule, BrowserAnimationsModule
    , BrowserModule
    , InputTextModule
    , ButtonModule
    , ReactiveFormsModule
    , TableModule
    , HttpClientModule,
    FormsModule,
    AppRoutingModule,
    CalendarModule,
    InputSwitchModule,
    MessagesModule,
    MessageModule
  ],
  declarations: [SaleOnlineComponent, ResultSearchComponent, AddEditComponent], exports: [SaleOnlineComponent]
})
export class SaleOnlineModule { }
