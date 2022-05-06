import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {

  cities1 = [];
  selectedCity1: any;
  value: Date;
  val: number;

  constructor() { }

  ngOnInit(): void {
  }

}
