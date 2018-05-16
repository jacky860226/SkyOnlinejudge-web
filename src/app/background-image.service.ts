import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackgroundImageService {

  constructor() { }
  getStyle(BackgroundImage) {
    let myStyles = {
        'background-image': BackgroundImage
    };
    return myStyles;
  }
  getStyleURL(BackgroundImageURL) {
    let myStyles = {
        'background-image': 'url('+BackgroundImageURL+')'
    };
    return myStyles;
  }
}
