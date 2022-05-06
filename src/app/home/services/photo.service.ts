import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  getImages() {
    return this.http.get<any>('assets/json/photos.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => { return data; });
  }

  getTestimonailsImages() {
    return this.http.get<any>('assets/json/testimonials.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => { return data; });
  }

  getPartnersLogos() {
    return this.http.get<any>('assets/json/partners.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => { return data; });
  }
}
