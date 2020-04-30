import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import * as interceptors from '@app/core/interceptors';
import * as fromGuards from '@app/core/guards';
import * as fromServices from '@app/core/services';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [
  ],
  exports: [
  ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers : [
        { provide: HTTP_INTERCEPTORS, useClass: interceptors.TokenInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: interceptors.CommonInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: interceptors.ResponseInterceptor, multi: true },
        ...fromGuards.guards,
        fromServices.SessionService,
        fromServices.StorageService
      ],
    };
  }
}
