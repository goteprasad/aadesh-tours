import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

declare var profile: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleSignInService {

  clientId = environment.CLIENT_ID;

  constructor() { }

  initiateGoogleScript() {
    const js = document.createElement("script");

    js.type = "text/javascript";
    js.src = 'https://apis.google.com/js/platform.js';
    js.async = true;
    js.defer = true;

    document.body.appendChild(js);

    const meta = document.createElement("meta");
    meta.setAttribute('name', 'google-signin-client_id');
    meta.setAttribute('content', this.clientId);

    document.body.appendChild(meta);

    const div = document.createElement("div");
    div.classList.add('g-signin2');
    div.setAttribute('data-onsuccess', 'onSignIn');

    document.body.appendChild(div);

    console.log(profile)
  }
}
