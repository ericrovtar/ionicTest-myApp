import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from 'ionic-native';

@Component({
	selector: 'page-about',
	templateUrl: 'about.html'
})
export class AboutPage {
	imageUrl;
	public base64Image: string;
	error: string;

	constructor(public navCtrl: NavController) {

	}

	takePhoto() {
		Camera.getPicture().then((imageData) => {
			this.imageUrl = imageData;
		}, (err) => {
			this.error = err;
			console.log(err);
		});
	}

	takePicture(){
		Camera.getPicture({
			destinationType: Camera.DestinationType.DATA_URL,
			targetWidth: 1000,
			targetHeight: 1000
		}).then((imageData) => {
		  // imageData is a base64 encoded string
			this.base64Image = "data:image/jpeg;base64," + imageData;

			// this.captureDataUrl = this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + imageData)
		}, (err) => {
			console.log(err);
		});
	}
}
