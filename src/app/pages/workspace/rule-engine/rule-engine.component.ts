import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-rule-engine',
  templateUrl: './rule-engine.component.html',
  styleUrls: ['./rule-engine.component.css']
})
export class RuleEngineComponent implements OnInit {

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