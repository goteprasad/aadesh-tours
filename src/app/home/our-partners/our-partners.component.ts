import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-our-partners',
  templateUrl: './our-partners.component.html',
  styleUrls: ['./our-partners.component.css']
})
export class OurPartnersComponent implements OnInit {

  images: any[];

  constructor(private photoService: PhotoService) { }

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  ngOnInit(): void {
    this.photoService.getPartnersLogos().then(images => this.images = images);
  }

}
