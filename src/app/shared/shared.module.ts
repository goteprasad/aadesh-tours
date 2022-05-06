import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleriaModule } from 'primeng-lts/galleria';
import { MenubarModule } from 'primeng-lts/menubar';
import { ButtonModule } from 'primeng-lts/button';
import { SplitButtonModule } from 'primeng-lts/splitbutton';
import { CardModule } from 'primeng-lts/card';
import { DropdownModule } from 'primeng-lts/dropdown';
import { InputTextModule } from 'primeng-lts/inputtext';
import { InputTextareaModule } from 'primeng-lts/inputtextarea';
import { ChipsModule } from 'primeng-lts/chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng-lts/calendar';
import { SliderModule } from 'primeng-lts/slider';
import { CarouselModule } from 'primeng-lts/carousel';
import { ToolbarModule } from 'primeng-lts/toolbar';
import { TabViewModule } from 'primeng-lts/tabview';
import {GMapModule} from 'primeng-lts/gmap';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GalleriaModule,
    MenubarModule,
    ButtonModule,
    SplitButtonModule,
    CardModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    SliderModule,
    CarouselModule,
    ToolbarModule,
    InputTextareaModule,
    InputTextModule,
    ChipsModule,
    TabViewModule,
    GMapModule
  ],
  exports: [
    GalleriaModule,
    MenubarModule,
    ButtonModule,
    SplitButtonModule,
    CardModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    SliderModule,
    CarouselModule,
    ToolbarModule,
    InputTextareaModule,
    InputTextModule,
    ChipsModule,
    TabViewModule,
    GMapModule
  ]
})
export class SharedModule { }
