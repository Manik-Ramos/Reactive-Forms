import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor() { }

  form = new FormGroup({
    firstName: new FormControl('', Validators.required ),
    fullName: new FormControl('', Validators.required ),
    designation: new FormControl('', Validators.required),
    empcode: new FormControl('',[ Validators.required, Validators.pattern(/^[8|6][0-9]{6}$/) ]),
    bloodGroup: new FormControl('', Validators.required),
    email: new FormControl('',[ Validators.required, Validators.pattern('^[a-z|A-Z][a-z|A-Z|0-9|]+@virtusa.com') ]),
    contact: new FormGroup({
      mobileNumber: new FormControl('', [ Validators.pattern('^[9|8][0-9]{9}$') ] ),
      emergencyNumber: new FormControl('', [ Validators.pattern('^[9|8][0-9]{9}$') ])
    }, this.atleastOneMobNum)
  });
  
  get firstName() {
    return this.form.get('firstName');
  }

  get fullname() {
    return this.form.get('fullName');
  }

  get designation() {
    return this.form.get('designation');
  }

  get empcode() {
    return this.form.get('empcode');
  }

  get bloodGroup() {
    return this.form.get('bloodGroup');
  }

  get email() {
    return this.form.get('email');
  }

  get contact() {
    return this.form.get('contact');
  }

  get mobileNumber() {
    return this.form.get('mobileNumber');
  }

  atleastOneMobNum(control: AbstractControl): ValidationErrors | null {
    const mobileNumber = control.get('mobileNumber');
    const emergencyNumber = control.get('emergencyNumber');
    console.log(mobileNumber);
    if (mobileNumber.value === '' && emergencyNumber.value === '') {
      return {
        'atleastOneMobNum': true
      };
    }
    return null;
  }
}

