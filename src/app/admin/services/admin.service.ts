import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  addPackages(body) {
    return this.http.post<any>(`${this.apiUrl}/packages/addPackages`, body);
  }

  uploadPackagesFiles(files: Array<File>, packageId) {
    const formData: any = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append("packages", files[i], files[i]['name']);
    }

    console.log(formData)
    return this.http.post<any>(`${this.apiUrl}/packages/uploadPackagesFiles?packageId=${packageId}`, formData);
  }
}
