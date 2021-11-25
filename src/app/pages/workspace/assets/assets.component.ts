import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/shared/services/user.service';
import { Response } from '../../../shared/models/response';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {
  modalRef?: BsModalRef;
  toggleContent: Boolean = true;
  users: any[] = [];
  error = '';
  success = '';
  newUserForm: FormGroup;
  userInContext: any = undefined;

  constructor(private fb: FormBuilder, private modalService: BsModalService, private userService: UserService) {
    this.newUserForm = this.fb.group({
      Name: ['', [Validators.required]],
      LastName: ['', [Validators.required]],
      UserId: ['', [Validators.required]],
      EmailId: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required]],
      ConfrimPassword: ['', [Validators.required]],
      MobileNumber: ['', [Validators.required]]
    });
  }
 
  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo') || 'false');
    let formData = new FormData(); 
    formData.append('managerId', userInfo.customerId); 
    this.userService.getUserList(formData).pipe(first()).subscribe((response: Response) => {
      if (parseInt(response.ResponseCode) < 0) {
        this.error = response.ResponseMessage;
      } else {
        this.users = (response as any).users;
      }
    }, ({ error }: HttpErrorResponse) => {
      if (error && error.message) {
        this.error = error.message;
      } else {
        this.error = 'Something went wrong!';
      }
    });
  }

  openModal(template: TemplateRef<any>, user?: any) {
    if (user) {
      this.userInContext = user;
      this.newUserForm.setValue({
        Name: user.Name,
        LastName: user.LastName,
        UserId: user.UserId,
        EmailId: user.EmailId,
        Password: '',
        ConfrimPassword: '',
        MobileNumber: user.MobileNumber
      });
    } else {
      this.userInContext = undefined;
      this.newUserForm.reset();
    }
    this.modalRef = this.modalService.show(template);
  }

  toggleDesign() {
    this.toggleContent = this.toggleContent ? false : true;
  }

  addOrEditUser() {
    this.error = '';
    this.success = '';
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo') || 'false');
    const value = this.newUserForm.value;
    let promise = this.userService.addUser(value);
    if (this.userInContext) {
      value.Id = this.userInContext.Id;
      value.CustomerId = this.userInContext.CustomerId;
      value.ManagerId = this.userInContext.ManagerId;
      value.UserStatus = userInfo.UserStatus;
      value.Company = userInfo.Company;
      promise = this.userService.updateUser(value);
    } else {
      value.ManagerId = userInfo.customerId;
    }
    promise.pipe(first()).subscribe((response: Response) => {
      if (parseInt(response.ResponseCode) < 0) {
        this.error = response.ResponseMessage;
      } else {
        this.newUserForm.reset();
        this.modalService.hide();
        this.getUsers();
      }
    }, ({ error }: HttpErrorResponse) => {
      if (error && error.message) {
        this.error = error.message;
      } else {
        this.error = 'Something went wrong!';
      }
    });
  }

  deleteUser(user: any) {
    const body = {
      Id: user.Id,
      UserId: user.UserId,
      Password: user.Password,
      Name: user.Name,
      LastName: user.LastName,
      MobileNumber: user.MobileNumber,
      EmailId: user.EmailId,
      UserStatus: user.UserStatus,
      ManagerId: user.ManagerId
    };
    this.userService.deleteUser(body).pipe(first()).subscribe((response: Response) => {
      if (parseInt(response.ResponseCode) < 0) {
        this.error = response.ResponseMessage;
      } else {
        this.getUsers();
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
