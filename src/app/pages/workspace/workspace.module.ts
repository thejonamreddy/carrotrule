import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxEditorModule } from 'ngx-editor';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { WorkspaceComponent } from './workspace.component';
import { NewPlanComponent } from './new-plan/new-plan.component';
import { AssetsComponent } from './assets/assets.component';
import { RolesComponent } from './roles/roles.component';
import { QuotaComponent } from './quota/quota.component';
import { DataSourceComponent } from './data-source/data-source.component';
import { TeamComponent } from './team/team.component';
import { ComputedFieldComponent } from './computed-field/computed-field.component';
import { RolesandfieldsComponent } from './rolesandfields/rolesandfields.component';
import { RuleEngineComponent } from './rule-engine/rule-engine.component';
import { RuleengineEditComponent } from './ruleengine-edit/ruleengine-edit.component';
import { CommunicationComponent } from './communication/communication.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { ExcelUploadComponent } from './excel-upload/excel-upload.component';
import { DndDirective } from 'src/app/pages/workspace/dnd.directive';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  declarations: [
    WorkspaceComponent,
    NewPlanComponent,
    AssetsComponent,
    RolesComponent,
    QuotaComponent,
    DataSourceComponent,
    TeamComponent,
    ComputedFieldComponent,
    RolesandfieldsComponent,
    RuleEngineComponent,
    RuleengineEditComponent,
    CommunicationComponent,
    WorkflowComponent,
    ExcelUploadComponent,
    ProgressComponent,
    // DndDirective
  ],
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot(),
    NgxEditorModule,
    ProgressbarModule.forRoot(),
  ]
})
export class WorkspaceModule { }
