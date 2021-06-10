import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';

const routes: Routes = [
  { path: 'new-employee', component: NewEmployeeComponent },
  { path: 'employees-list', component: EmployeeListComponent },
  { path: 'employees-details', component: EmployeeDetailsComponent },
  { path: '**', redirectTo: '/new-employee' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
