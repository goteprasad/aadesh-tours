import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../services/packages.service';

@Component({
  selector: 'app-pkg-layout-three',
  templateUrl: './pkg-layout-three.component.html',
  styleUrls: ['./pkg-layout-three.component.css']
})
export class PkgLayoutThreeComponent implements OnInit {

  images: any[];

  constructor(private packagesService: PackagesService) { }

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
    this.packagesService.getPakcages().then(images => this.images = images);
  }

}
