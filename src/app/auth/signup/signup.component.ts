import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';
import {loginNameValidator, validateUsername, emailValidator} from '../../form/form-validators/sync.validator';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isLoading = false;
  form: FormGroup;
  scorecolor: string;
  passwordStrength = '';
  passwordScore: number;
  position: TooltipPosition = 'below';

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.form = new FormGroup({
      loginName: new FormControl(null, {validators: [Validators.required,loginNameValidator],
        asyncValidators: [validateUsername.bind(this)]}),
      password: new FormControl(null, {validators: [Validators.required]}),
      confirmPassword: new FormControl(null, {validators: [Validators.required]}),
      email: new FormControl(null, {validators: [Validators.required,emailValidator]}),
      displayName: new FormControl(null, {validators: [Validators.required],
        asyncValidators: []}),
    });
  }

  checkPasswordStrength(password: string) {
    const score = this.ratePassword(password);
    // console.log(this.passwordScore);
    if (score > 80) {
      this.scorecolor = 'strong';
      return this.passwordStrength = 'strong';
    }
    if (score > 40) {
      this.scorecolor = 'good';
      return this.passwordStrength = 'good';
    }
    if (score <= 40) {
      this.scorecolor = 'weak';
      return this.passwordStrength = 'weak';
    }
  }

  ratePassword(password: string) {
    this.passwordScore = 0;
    if (!password) {
      return;
    }

    const letters = {};
    for (let i = 0; i < password.length; i++) {
      letters[password[i]] = (letters[password[i]] || 0) + 1;
      this.passwordScore += 5.0 / letters[password[i]];
    }

    const variations = {
      digits: /\d/.test(password),
      lower: /[a-z]/.test(password),
      upper: /[A-Z]/.test(password),
      nonWords: /\W/.test(password),
    };

    let variationCount = 0;
    for (const check of Object.keys(variations)) {
      variationCount += (variations[check]) ? 1 : 0;
    }
    this.passwordScore += (variationCount - 1) * 10;
    return this.passwordScore;
  }

  onSignUp(){

  }

}
