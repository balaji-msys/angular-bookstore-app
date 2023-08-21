import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from 'app/password.validator';
import { AuthenticationService } from 'app/services/authentication.service';
// import { confirmPasswordValidator } from 'app/confirm';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  userdata: any = [];
  constructor(private authentication: AuthenticationService) {}

  ngOnInit() {
    this.userdata = localStorage.getItem('userdetails');
  }
  register = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, passwordValidator()]),
    confirm: new FormControl(null),
  });

  signup() {
    this.authentication.signup(this.register);
  }
  confirmPasswordMatch(): boolean {
    const password = this.register.get('password')?.value;
    const confirm = this.register.get('confirm')?.value;
    return password === confirm;
  }
}
