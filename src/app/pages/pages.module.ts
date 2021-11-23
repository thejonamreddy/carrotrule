import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

import { SharedModule } from '../shared/shared.module';
import { PlanService } from '../shared/services/plan.service';
import { UserService } from '../shared/services/user.service';

@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ],
  providers: [
    PlanService,
    UserService
  ]
})
export class PagesModule { }
