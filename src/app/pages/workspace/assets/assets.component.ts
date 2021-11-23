import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
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

  constructor(private modalService: BsModalService, private userService: UserService) {}
 
  ngOnInit(): void {
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo') || '');
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

  openModal(user: TemplateRef<any>) {
    this.modalRef = this.modalService.show(user);
  }

  toggleDesign() {
      this.toggleContent = this.toggleContent ? false : true;
   }

}
