import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from 'ionic-native';

// import { DomSanitizer, SafeUrl } from '@angular/platform-browser'

@Component({
	selector: 'page-about',
	templateUrl: 'about.html'
})
export class AboutPage {
	// imageUrl;
	// public base64Image: string;
	// captureDataUrl: SafeUrl;
	// error: string;

	constructor(
		public navCtrl: NavController,
		// private sanitizer: DomSanitizer
	) {

	}

	captureDataUrl: string;

	capture() {
		//setup camera options
		const cameraOptions: CameraOptions = {
			quality: 50,
			destinationType: Camera.DestinationType.DATA_URL,
			encodingType: Camera.EncodingType.JPEG,
			mediaType: Camera.MediaType.PICTURE,
		};

		Camera.getPicture(cameraOptions).then((imageData) => {
			// imageData is either a base64 encoded string or a file URI
			// If it's base64:
			this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
		}, (err) => {
			// Handle error
		});
	}

	// takePhoto() {
	// 	Camera.getPicture().then((imageData) => {
	// 		this.imageUrl = imageData;
	// 	}, (err) => {
	// 		this.error = err;
	// 		console.log(err);
	// 	});
	// }

	// takePicture(){
	// 	Camera.getPicture({
	// 		destinationType: Camera.DestinationType.DATA_URL,
	// 		targetWidth: 1000,
	// 		targetHeight: 1000
	// 	}).then((imageData) => {
	// 	  	// imageData is a base64 encoded string
	// 		this.base64Image = "data:image/jpeg;base64," + imageData;

	// 		this.captureDataUrl = this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + imageData);
	// 	}, (err) => {
	// 		this.error = err;			
	// 		console.log(err);
	// 	});
	// }
}
