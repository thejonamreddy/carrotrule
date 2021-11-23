import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { PlanService } from 'src/app/shared/services/plan.service';
import { Response } from '../../../shared/models/response';

@Component({
  selector: 'app-new-plan',
  templateUrl: './new-plan.component.html',
  styleUrls: ['./new-plan.component.css']
})
export class NewPlanComponent implements OnInit {

  planForm: FormGroup;
  error = '';
  success = '';

  constructor(private router: Router, private fb: FormBuilder, private planService: PlanService) {
    this.planForm = this.fb.group({
      projectname: ['', [Validators.required]],
      name: ['', [Validators.required]],
      startdate: ['', [Validators.required]],
      enddate: ['', [Validators.required]],
      industrytype: ['', [Validators.required]],
      category: ['', [Validators.required]],
      keywords: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  submit() {
    this.error = '';
    this.success = '';
    const value = this.planForm.value;
    this.planService.newPlan(value).pipe(first()).subscribe((response: Response) => {
      if (parseInt(response.ResponseCode) < 0) {
        this.error = response.ResponseMessage;
      } else {
        
        this.router.navigateByUrl('app/workspace/new-plan/user');
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
