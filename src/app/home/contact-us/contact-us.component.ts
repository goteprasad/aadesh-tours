import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  enquiryForm: FormGroup;
  options: any;

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.enquiryForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    })

    this.options = {
      center: { lat: 19.852770, lng: 75.351372 },
      zoom: 12
    };
  }

  onSubmitForm() {
    if(this.enquiryForm.invalid){
      this.enquiryForm.markAllAsTouched();
      this.enquiryForm.updateValueAndValidity();
      alert('Please fill required fields');
      return;
    }
    console.log(this.enquiryForm.value);
    const reqBody = this.enquiryForm.value;
    this.userService.sendMail(reqBody).subscribe(res =>{
      alert(res.message);
    }, error =>{
      console.log(error.error.error.message);
    });
    this.enquiryForm.reset();
  }

}
