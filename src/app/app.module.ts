import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {OverlayModule} from '@angular/cdk/overlay';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { popUpModalComponent } from './components/modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule , MatDialogRef} from '@angular/material/dialog';
import { GrafanaFramesComponent } from './components/grafana-frames/grafana-frames.component';
import { SafePipe } from './safe.pipe';
import { FormsModule } from '@angular/forms';
// import { ModalComponent as ModalComponent } from './modal/modal.component';
@NgModule({
  declarations: [
    AppComponent,
    popUpModalComponent,
    GrafanaFramesComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule ,
    OverlayModule,
    FormsModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {},
      // DialogService
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
