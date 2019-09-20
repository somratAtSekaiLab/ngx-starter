import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import * as fromComponents from '@app/utility/components';
import * as fromDirectives from '@app/utility/directives';
import * as fromPipes from '@app/utility/pipes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ...fromComponents.components,
    ...fromDirectives.directives,
    ...fromPipes.pipes,
  ],
  declarations: [
    ...fromComponents.components,
    ...fromDirectives.directives,
    ...fromPipes.pipes,
  ]
})
export class UtilityModule {
}
