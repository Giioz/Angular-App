import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { HotelsComponent } from './hotels/hotels.component';
import { BookedRoomsComponent } from './booked-rooms/booked-rooms.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RestourantHomeComponent } from './Restourant/restourant-home/restourant-home.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoadingComponent } from './loading/loading.component';
import { InterceptService } from './intercept.service';
import { NotfoundComponent } from './notfound/notfound.component';
import { FilterSectionComponent } from './Restourant/filter-section/filter-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    RoomsComponent,
    HotelsComponent,
    BookedRoomsComponent,
    RestourantHomeComponent,
    FooterComponent,
    DetailsComponent,
    LoadingComponent,
    NotfoundComponent,
    FilterSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    provideClientHydration(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass:InterceptService,
      multi:true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
