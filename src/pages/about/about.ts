import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from 'ionic-native';

@Component({
	selector: 'page-about',
	templateUrl: 'about.html'
})
export class AboutPage {
	imageUrl;
	error: string;

	constructor(public navCtrl: NavController) {

	}

	takePhoto() {
		Camera.getPicture({ destinationType: Camera.DestinationType.FILE_URI }).then((imageData) => {
			this.imageUrl = 'data:image/jpeg;base64,' + imageData;
		}, (err) => {
			this.error = err;
			console.log(err);
		});
	}
}
