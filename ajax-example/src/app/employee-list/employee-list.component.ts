import { Component, OnInit } from '@angular/core';
import { HttpcallService } from '../httpcall.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees : any = [];

  constructor(private employeeService : HttpcallService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees()
      .subscribe(
        data => this.employees = data,
        error => console.error("Error while fetching"),
        ()=> console.table(this.employees)
      );
  }

}
