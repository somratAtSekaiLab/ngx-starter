import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared';
import { PageRoutingModule } from '@app/page/page-routing.module';

import * as pageComponents from '@app/page/components';

@NgModule({
  declarations: [
    ...pageComponents.components
  ],
  imports: [
    CommonModule,
    SharedModule,
    PageRoutingModule
  ]
})
export class PageModule { }
