import { Injectable } from '@angular/core';
import { Place } from './place.model'; // Import model

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place(    // Setting up some hard coded places by calling the constructor in place.model.ts
    'p1', 
    'Manhattan Mansion', 
    'In the heart of New York City', 
    'https://upload.wikimedia.org/wikipedia/commons/2/2b/Italians_at_Morris_Jumel_Mansion_jeh.jpg',  // click on 'Original File' when in WikiMedia Commons
    149.99
    ),
    new Place(    // Calling the constructor in place.model.ts
      'p2', 
      'Lamour Toujours', 
      'A romantic place in Paris', 
      'https://upload.wikimedia.org/wikipedia/commons/a/ae/2004_in_Paris_%28u%29.jpg',   // click on 'Original File' when in WikiMedia Commons
      189.99
    ),
    new Place(    // Calling the constructor in place.model.ts
      'p3', 
      'The Foggy Palace', 
      'Not your average city trip', 
      'https://upload.wikimedia.org/wikipedia/commons/2/27/Foggy_Wien._Schloss_Sch%C3%B6nbrunn_-_panoramio.jpg',   // click on 'Original File' when in WikiMedia Commons
      99.99
    )
  ];

  // This getter allows us to copy these places, or get these places
  get places() {
    return [...this._places]; // return a copy of the _places array, so we can edit the array from a elsewhere 
  }

  constructor() { }

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};   // _places is the private array we created in this file , {...} clones it, called spread operator
  }
}
