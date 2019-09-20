import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  BsDatepickerModule,
  TypeaheadModule,
  ModalModule,
  AlertModule,
  PaginationModule,
  TooltipModule,
  BsDropdownModule,
  RatingModule,
  TabsModule,
  PopoverModule,
  ProgressbarModule
} from 'ngx-bootstrap';


import { UtilityModule } from '@app/utility';
import { ValidationModule } from '@app/validation';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    UtilityModule,
    BsDatepickerModule.forRoot(),
    TypeaheadModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    PaginationModule.forRoot(),
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    RatingModule.forRoot(),
    TabsModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    ValidationModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    UtilityModule,
    ValidationModule,
    BsDatepickerModule,
    TypeaheadModule,
    ModalModule,
    AlertModule,
    PaginationModule,
    TooltipModule,
    ProgressbarModule,
    BsDropdownModule,
    RatingModule,
    TabsModule,
    PopoverModule
  ],
  declarations: [],
})
export class SharedModule {
}
