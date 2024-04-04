import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './democomponent';
import { LoginComponent } from './login/login.component';
import { DemoDirective } from './demo.directive';
import { EvenoddPipe } from './evenodd.pipe';
import { GreetService } from './greet.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DemoComponent,
    DemoDirective,
    EvenoddPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [
  GreetService
  ],
  bootstrap: [AppComponent,DemoComponent]
})
export class AppModule { }
