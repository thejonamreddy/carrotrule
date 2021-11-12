import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-computed-field',
  templateUrl: './computed-field.component.html',
  styleUrls: ['./computed-field.component.css']
})
export class ComputedFieldComponent implements OnInit {

  modalRef?: BsModalRef;
  toggleContent: Boolean = true;

  constructor(private modalService: BsModalService) {}
 
  ngOnInit(): void {
  }

  openModal(user: TemplateRef<any>) {
    this.modalRef = this.modalService.show(user);
  }

  toggleDesign() {
      this.toggleContent = this.toggleContent ? false : true;
   }

}
