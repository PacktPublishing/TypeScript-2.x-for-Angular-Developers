import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { ImageService } from './image.service';
import { StringReversePipe } from './string-reverse.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BackgroundChangerDirective } from './background-changer.directive';


const appRoutes: Routes = [
  { path: 'random', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    StringReversePipe,
    PageNotFoundComponent,
    BackgroundChangerDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ ImageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
