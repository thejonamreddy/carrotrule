import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Response } from '../../shared/models/response';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  error = '';
  success = '';

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) {
    this.signinForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void { }

  submit() {
    this.error = '';
    this.success = '';
    const value = this.signinForm.value;
    this.authService.signin(value).pipe(first()).subscribe((response: Response) => {
      sessionStorage.setItem('userInfo', JSON.stringify(response));
      this.router.navigateByUrl('app/home');
    }, ({ error }: HttpErrorResponse) => {
      if (error && error.message) {
        this.error = error.message;
      } else {
        this.error = 'Something went wrong!';
      }
    });
  }
}
