import { Component, OnInit } from '@angular/core';

import { BackgroundImageService } from '../background-image.service';

@Component({
  selector: 'app-image-bar',
  templateUrl: './image-bar.component.html',
  styleUrls: ['./image-bar.component.css']
})
export class ImageBarComponent implements OnInit {

  constructor(public BackgroundImage: BackgroundImageService) { }

  ngOnInit() {
  }
  imageBar_image = '//i.imgur.com/KiKOjd6.jpg'

}
