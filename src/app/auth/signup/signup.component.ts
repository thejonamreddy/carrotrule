import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { first } from 'rxjs/operators';
import { Response } from '../../shared/models/response';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  error = '';
  success = '';

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.signupForm = this.fb.group({
      Name: ['', [Validators.required]],
      EmailId: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required]],
      ConfrimPassword: ['', [Validators.required]],
      Company: ['', [Validators.required]],
      MobileNumber: ['', [Validators.required]]
    });
  }

  ngOnInit(): void { }

  submit() {
    this.error = '';
    this.success = '';
    if (!this.signupForm.valid) {
      this.error = "There are incomplete required fields. Please complete them.";
      return;
    }
    const value = this.signupForm.value;
    this.authService.signup(value).pipe(first()).subscribe((response: Response) => {
      if (parseInt(response.ResponseCode) < 0) {
        this.error = response.ResponseMessage;
      } else {
        this.success = response.ResponseMessage;
        this.signupForm.reset();
      }
    }, ({ error }: HttpErrorResponse) => {
      if (error && error.message) {
        this.error = error.message;
      } else {
        this.error = 'Something went wrong!';
      }
    });
  }

}
