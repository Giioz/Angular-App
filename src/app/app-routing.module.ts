import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { HotelsComponent } from './hotels/hotels.component';
import { BookedRoomsComponent } from './booked-rooms/booked-rooms.component';
import { DetailsComponent } from './details/details.component';
import { RestourantHomeComponent } from './Restourant/restourant-home/restourant-home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HotelRoomsComponent } from './hotel-rooms/hotel-rooms.component';
import { BasketComponent } from './Restourant/basket/basket.component';
import { basketGuard } from './Restourant/basket.guard';

const routes: Routes = [
  { path: "", component: HomeComponent },
  {path: "rooms", component:RoomsComponent},
  {path: "hotels", component:HotelsComponent},
  {path: "booked-rooms", component:BookedRoomsComponent},
  {path: "room-details/:id", component:DetailsComponent},
  {path: "hotel-rooms/:id", component:HotelRoomsComponent},
  {path: "hotel-restaurant", component:RestourantHomeComponent},
  {path: "cart", component:BasketComponent, canActivate:[basketGuard]},
  {path: "**", component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
