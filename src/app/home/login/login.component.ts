import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/admin/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userRole: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.loginForm.patchValue({
      userRole: 'customer'
    });
  }

  /**
  * Login form on submit function
  */
  onSubmitForm() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      this.loginForm.updateValueAndValidity();
      return;
    }
    this.authService.logIn(this.loginForm.value);
  }

}
