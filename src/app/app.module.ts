import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CookieModule } from 'ngx-cookie';

import { CoreModule } from '@app/core';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    CookieModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
