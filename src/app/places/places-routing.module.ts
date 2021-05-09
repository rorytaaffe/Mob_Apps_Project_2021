import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesPage } from './places.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: PlacesPage,
    children: [
      {       
        path: 'discover',  // must match tab=""  in ion-button
        children: [   // these 2 pages we can access through the discover page
        {
          path: '',   // '' will keep us on discover page                    // DiscoverPageModule copied from discover.module.ts
          loadChildren: () => import('./discover/discover.module').then( m => m.DiscoverPageModule) // this will bring us to the discover page
        },
        {
          path: 'place-detail',  
          loadChildren: () => import('./discover/place-detail/place-detail.module').then( m => m.PlaceDetailPageModule)  // PlaceDetailPageModule copied from place-detail.module.ts
        }
      ]
    },
      {     // must match with tab=""
        path: 'offer',   // pages we can access through offer
        children: [ 
          {
            path: '',                                                 // from offer.module.ts
            loadChildren: () => import('./offer/offer.module').then( m => m.OfferPageModule) 
          },
        ]
      },
      {     // must match with tab=""
        path: 'booking',   // pages we can access through offer
        children: [ 
          {
            path: '',                                                 // from booking.module.ts
            loadChildren: () => import('./bookings/bookings.module').then( m => m.BookingsPageModule) 
          },
        ]
      },
      {     // must match with tab=""
        path: 'weather',   // pages we can access through offer
        children: [ 
          {
            path: '',                                                 // from booking.module.ts
            loadChildren: () => import('./weather/weather.module').then( m => m.WeatherPageModule) 
          },
        ]
      },
      {
        path: '', // for when we go to /places/tabs
        redirectTo: '/places/tabs/discover', // redirect
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '', // this is triggered when you're just going to /places
    redirectTo: '/places/tabs/discover', // redirect 
    pathMatch: 'full' // this kicks in if you're really just going to /places, and not /places/something else
  },
  {
    path: 'bookings',
    loadChildren: () => import('./bookings/bookings.module').then( m => m.BookingsPageModule)
  },
  {
    path: 'weather',
    loadChildren: () => import('./weather/weather.module').then( m => m.WeatherPageModule)
  },
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}
