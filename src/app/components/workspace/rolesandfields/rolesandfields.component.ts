import { Component, OnInit, TemplateRef,OnDestroy } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
// import { Editor } from 'ngx-editor';
import { Validators, Editor, Toolbar } from "ngx-editor";

@Component({
  selector: 'app-rolesandfields',
  templateUrl: './rolesandfields.component.html',
  styleUrls: ['./rolesandfields.component.css']
})
export class RolesandfieldsComponent implements OnInit, OnDestroy {
  modalRef?: BsModalRef;
  toggleContent: Boolean = true;
  editor: any =  Editor;
  html: any = '';
  toolbar: Toolbar = [
    ["bold", "italic"],
    ["underline", "strike"],
    ["code", "blockquote"],
    ["ordered_list", "bullet_list"],
    [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    ["link", "image"],
    ["text_color", "background_color"],
    ["align_left", "align_center", "align_right", "align_justify"],
    
  ];

  constructor(private modalService: BsModalService) {}
 
  ngOnInit(): void {
    this.editor = new Editor();
  }

  openModal(user: TemplateRef<any>) {
    this.modalRef = this.modalService.show(user);
  }

  toggleDesign() {
      this.toggleContent = this.toggleContent ? false : true;
   }  

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }

}
