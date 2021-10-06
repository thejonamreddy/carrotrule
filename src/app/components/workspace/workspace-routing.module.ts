import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsComponent } from './assets/assets.component';
import { NewPlanComponent } from './new-plan/new-plan.component';
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
        path: 'assets',
        component: AssetsComponent,
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
