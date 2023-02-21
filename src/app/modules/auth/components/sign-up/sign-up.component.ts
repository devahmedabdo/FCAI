import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  faGoogle = faGoogle;
  faFacebook = faFacebookF;

  signUpForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor() {}

  ngOnInit(): void {}

  signUp(): void {
    console.log(this.signUpForm.value);
  }

  get firstName(): FormControl {
    return this.signUpForm.get('firstName') as FormControl;
  }

  get lastName(): FormControl {
    return this.signUpForm.get('lastName') as FormControl;
  }

  get username(): FormControl {
    return this.signUpForm.get('username') as FormControl;
  }

  get email(): FormControl {
    return this.signUpForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.signUpForm.get('password') as FormControl;
  }

  get confirmPassword(): FormControl {
    return this.signUpForm.get('confirmPassword') as FormControl;
  }
}
