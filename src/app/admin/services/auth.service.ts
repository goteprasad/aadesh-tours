import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.apiUrl;

  token: any;
  isAuthenticated = new Subject<boolean>();
  isAuth: boolean = false;

  userId: any;
  userRole: any;

  timer: any;

  constructor(private http: HttpClient, private router: Router) { }

  logIn(reqBody: { userName: string; password: string }) {
    this.http
      .post<any>(`${this.apiUrl}/user/login`, reqBody)
      .subscribe(
        (res) => {
          const token = res.token;
          const expiresIn = res.expiresIn;

          const current = new Date();
          const expDate = new Date(current.getTime() + expiresIn * 1000);

          this.token = token;
          this.userId = res.userId;
          this.userRole = res.userRole;

          if (this.token) {
            this.setAuthTimer(expiresIn);

            this.setAuthData(this.token, expDate, this.userId, this.userRole);

            this.isAuth = true;
            this.isAuthenticated.next(true);

            if (this.userRole === 'admin') {
              this.router.navigate(['/admin/setting']);
            } else {
              this.router.navigate(['/']);
            }
          }
        },
        (error) => {
          this.isAuthenticated.next(false);
        }
      );
  }

  signUp(reqBody: any){
    return  this.http
    .post<any>(`${this.apiUrl}/user/singup`, reqBody)
  }

  signOut() {
    this.token = null;
    this.isAuthenticated.next(false);
    this.isAuth = false;
    this.userId = null;
    this.userRole = null;
    this.router.navigate(['/']);
    clearTimeout(this.timer);
    this.clearAuthData();
  }

  getToken() {
    return this.token;
  }

  getUserId() {
    return this.userId;
  }

  getAuthStatus() {
    return this.isAuthenticated.asObservable();
  }

  getAuthenticatedProp() {
    return this.isAuth;
  }

  autoAuth() {
    const authData = this.getAuthData();

    if (authData) {
      const now = new Date();
      const expirationDuration = authData.expiration.getTime() - now.getTime();

      if (expirationDuration > 0) {
        this.token = authData.token;
        this.userId = authData.userId;
        this.userRole = authData.userRole;
        this.isAuthenticated.next(true);
        this.isAuth = true;
        this.setAuthTimer(expirationDuration / 1000);
      }
    }
  }

  setAuthTimer(duration: number) {
    this.timer = setTimeout(() => {
      this.signOut();
    }, duration * 1000);
  }

  setAuthData(
    token: string,
    expirationDate: Date,
    userId: string,
    userRole: string
  ) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('userId', userId);
    localStorage.setItem('userRole', userRole);
  }

  getAuthData() {
    const token = localStorage.getItem('token');
    const expiration = localStorage.getItem('expiration');
    const userId = localStorage.getItem('userId');
    const userRole = localStorage.getItem('userRole');

    if (!token || !expiration || !userId || !userRole) {
      return;
    }

    return {
      token: token,
      expiration: new Date(expiration),
      userId: userId,
      userRole: userRole,
    };
  }

  clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('userId');
    localStorage.removeItem('userRole');
  }
}
