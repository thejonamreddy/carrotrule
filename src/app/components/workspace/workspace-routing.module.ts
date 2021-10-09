import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsComponent } from './assets/assets.component';
import { ComputedFieldComponent } from './computed-field/computed-field.component';
import { DataSourceComponent } from './data-source/data-source.component';
import { NewPlanComponent } from './new-plan/new-plan.component';
import { QuotaComponent } from './quota/quota.component';
import { RolesComponent } from './roles/roles.component';
import { RolesandfieldsComponent } from './rolesandfields/rolesandfields.component';
import { TeamComponent } from './team/team.component';
import { WorkspaceComponent } from './workspace.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: WorkspaceComponent,
  //   children: [
  //     {
  //       path: 'newplan',
  //       component: NewPlanComponent,
  //     },
  //     {
  //       path: 'assets',
  //       component: AssetsComponent,
  //     }

  //   ],
  // }

  { path: '', component: WorkspaceComponent },
  {
    path: 'new-plan',
    children: [
      {
        path: '',
        component: NewPlanComponent,
      },
      {
        path: 'user',
        component: AssetsComponent,
      },
      {
        path: 'roles',
        component: RolesComponent,
      },
      {
        path: 'team',
        component: TeamComponent,
      },
      {
        path: 'quota',
        component: QuotaComponent,
      },
      {
        path: 'data-source',
        component: DataSourceComponent,
      },
      {
        path: 'computed-field',
        component: ComputedFieldComponent,
      },
      {
        path: 'roles-fields',
        component: RolesandfieldsComponent,
      },
    ],
  },
  // {path:'assets', component: AssetsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkspaceRoutingModule {}
