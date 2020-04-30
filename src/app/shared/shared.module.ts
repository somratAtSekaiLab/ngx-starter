import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RatingModule } from 'ngx-bootstrap/rating';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

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
