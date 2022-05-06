import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images: any[];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  responsiveOptions2: any[] = [
    {
      breakpoint: '1500px',
      numVisible: 5
    },
    {
      breakpoint: '1024px',
      numVisible: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  displayCustom: boolean;

  activeIndex: number = 0;


  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.photoService.getImages().then(images => {
      this.images = images;
      console.log(this.images)
    })
  }

  imageClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
  }

}
