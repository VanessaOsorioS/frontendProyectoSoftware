import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { CreateClientComponent } from './client/create-client/create-client.component';
import { DeleteClientComponent } from './client/delete-client/delete-client.component';
import { ListClientComponent } from './client/list-client/list-client.component';
import { EditClientComponent } from './client/edit-client/edit-client.component';
import { EventComponent } from './event/event.component';
import { CreateEventComponent } from './event/create-event/create-event.component';
import { ListEventComponent } from './event/list-event/list-event.component';
import { EditEventComponent } from './event/edit-event/edit-event.component';
import { DeleteEventComponent } from './event/delete-event/delete-event.component';


@NgModule({
  declarations: [
    CreateClientComponent,
    DeleteClientComponent,
    ListClientComponent,
    EditClientComponent,
    EventComponent,
    CreateEventComponent,
    ListEventComponent,
    EditEventComponent,
    DeleteEventComponent
  ],
  imports: [
    CommonModule,
    ParametersRoutingModule
  ]
})
export class ParametersModule { }
