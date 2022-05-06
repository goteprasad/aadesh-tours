import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items: any;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        routerLink: '/home'
        // items: [{
        //   label: 'New',
        //   icon: 'pi pi-fw pi-plus',
        //   items: [
        //     { label: 'Project' },
        //     { label: 'Other' },
        //   ]
        // },
        // { label: 'Open' },
        // { label: 'Quit' }
        // ]
      },
      {
        label: 'About us',
        routerLink: '/about-us'
      },
      {
        label: 'All Packages',
        routerLink: '/all-packages'
      },
      {
        label: 'Gallery',
        routerLink: '/gallery'
      },
      {
        label: 'Blogs'
      },
      {
        label: 'Contact us',
        routerLink: '/contact-us'
      }
    ];
  }
}
