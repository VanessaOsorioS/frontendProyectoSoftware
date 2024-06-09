import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateClientComponent } from './client/create-client/create-client.component';
import { CreateClComponent } from './modules/paramenters/client/create-cl/create-cl.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateClientComponent,
    CreateClComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
