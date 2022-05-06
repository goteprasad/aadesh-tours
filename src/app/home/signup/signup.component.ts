import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/admin/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      userRole: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required]
    });

    this.signupForm.patchValue({
      userRole: 'customer'
    });
  }

  /**
  * Login form on submit function
  */
  onSubmitForm() {
    this.submitted = true;
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      this.signupForm.updateValueAndValidity();
      return;
    }
    const reqBody = this.signupForm.value;
    this.authService.signUp(reqBody).subscribe(res =>{
      alert(res.message);
      this.signupForm.reset();
    }, error =>{
      console.log(error.error.error.message);
    });
  }

}
