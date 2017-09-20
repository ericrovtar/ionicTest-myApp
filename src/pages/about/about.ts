import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from 'ionic-native';

@Component({
	selector: 'page-about',
	templateUrl: 'about.html'
})
export class AboutPage {
	imageUrl;
	constructor(public navCtrl: NavController) {

	}

	takePhoto() {
		Camera.getPicture().then((imageData) => {
			this.imageUrl = imageData
		}, (err) => {
			console.log(err);
		});
	}
}
