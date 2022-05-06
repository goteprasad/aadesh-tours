import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PackagesService } from '../services/packages.service';

@Component({
  selector: 'app-pkg-layout-two',
  templateUrl: './pkg-layout-two.component.html',
  styleUrls: ['./pkg-layout-two.component.css']
})
export class PkgLayoutTwoComponent implements OnInit {

  images: any[];

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

  constructor(private packagesService: PackagesService) { }

  ngOnInit(): void {
    this.packagesService.getPakcages().then(images => this.images = images);
  }

}
