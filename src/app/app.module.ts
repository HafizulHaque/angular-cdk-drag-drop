import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CdkDropListGroup, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
