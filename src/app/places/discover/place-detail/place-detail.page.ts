import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  //constructor(private router: Router, private navCtrl: NavController) { }
  constructor(private navCtrl: NavController, private route: ActivatedRoute, private placesService: PlacesService) {}

  ngOnInit() {
  }

  onBookPlace() {
    //this.router.navigateByUrl('/places/tabs/discover');
    this.navCtrl.navigateBack('/places/tabs/discover'); // navigateBack will give us the right animation

  }

}
