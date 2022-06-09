import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FnamePipe } from './pipe/fname.pipe';
// import { ChatTimePipe } from './pipe/chat-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FnamePipe,
    // ChatTimePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    ToastrModule.forRoot()
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
