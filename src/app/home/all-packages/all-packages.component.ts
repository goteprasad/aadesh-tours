import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../services/packages.service';

@Component({
  selector: 'app-all-packages',
  templateUrl: './all-packages.component.html',
  styleUrls: ['./all-packages.component.css']
})
export class AllPackagesComponent implements OnInit {

  images: any[];

  constructor(private packagesService: PackagesService) { }

  ngOnInit(): void {
    this.packagesService.getAllPakcages().then(images => {this.images = images; console.log(this.images)});
  }

}
