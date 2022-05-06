import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  constructor(private http: HttpClient) { }

  getPakcages() {
    return this.http.get<any>('assets/json/packages.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => { return data; });
  }

  getAllPakcages() {
    return this.http.get<any>('assets/json/all_packages.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => { return data; });
  }
}
