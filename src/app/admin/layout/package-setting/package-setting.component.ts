import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-package-setting',
  templateUrl: './package-setting.component.html',
  styleUrls: ['./package-setting.component.css']
})
export class PackageSettingComponent implements OnInit {

  packagesForm: FormGroup;
  submitted: boolean = false;
  packagesFiles: Array<File> = [];

  packageTypes = [
    {label: 'Popular packages', value: 'Popular packages'},
    {label: 'Best of the season', value: 'Best of the season'},
    {label: 'International tours', value: 'International tours'}
  ]

  seasons = [
    {label: 'Summer', value: 'Summer'},
    {label: 'Winter', value: 'Winter'},
    {label: 'Rainy', value: 'Rainy'}
  ]

  constructor(private fb: FormBuilder, private adminService: AdminService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.packagesForm = this.fb.group({
      'pkgType': ['', Validators.required],
      'pkgName': ['', Validators.required],
      'duration': ['', Validators.required],
      'desc': ['', Validators.required],
      'facilities': [''],
      'temsConditions': [''],
      'season': [''],
      'price': ['', Validators.required]
    })
  }

  onSelectFile(event) {
    let files = event.target.files;
    if (files) {
      this.packagesFiles = [];
      for (let file of files) {
        this.packagesFiles.push(file);
      }
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.packagesForm.invalid) {
      alert('Please fill all the fields');
      this.packagesForm.markAllAsTouched();
      return;
    }

    let packagesData = this.packagesForm.value;
    this.adminService.addPackages(packagesData).subscribe(res => {
      alert(res.message);
      
      const packagesFiles = this.packagesFiles;
      if (packagesFiles.length) {
        const packageId = res.data.id;
        
        this.adminService.uploadPackagesFiles(packagesFiles, packageId).subscribe(res => {
          alert(res.message)
        }, error => {
          alert(error.error.error.message);
        })
      }
    }, error =>{
      alert(error.error.error.message);
    });
  }

}
