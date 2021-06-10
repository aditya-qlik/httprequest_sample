import { Component, OnInit } from '@angular/core';
import { HttpcallService } from '../httpcall.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employees: any = [];

  rows: any = [];
  columns: any = [
    { name: 'EmpId' },
    { name: 'Name' },
    { name: 'UserName' },
    { name: 'EmailId' },
    { name: 'PhoneNo' },
    { name: 'Street' },
    { name: 'City' },
    { name: 'Latitude' },
    { name: 'Longitude' }
  ];

  constructor(private employeeService: HttpcallService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(
      data => this.employees = data,
      error => console.error("error while getting employee details"),
      () => this.addTableData()
    );
  }

  getTableData(employee: any) {
    const { id: EmpId, name: Name, username: UserName, address: Address, email: EmailId, phone: PhoneNo } = employee;
    const { Street, City, Latitude, Longitude } = this.getAddressDetails(Address);
    return { EmpId, Name, UserName, EmailId, PhoneNo, Street, City, Latitude, Longitude }
  }

  getAddressDetails(address: any) {
    const { street: Street, city: City, geo: GeoLocation } = address;
    const { Latitude, Longitude } = this.getGeoLocation(GeoLocation);
    return { Street, City, Latitude, Longitude }
  }

  getGeoLocation(location: any) {
    const { lat: Latitude, log: Longitude } = location;
    return { Latitude, Longitude };
  }

  addTableData() {
    this.employees.forEach((employee: any) => {
      const { EmpId, Name, UserName, EmailId, PhoneNo, Street, City, Latitude, Longitude } = this.getTableData(employee)
      const row = {
        empId: EmpId,
        name: Name,
        userName: UserName,
        emailId: EmailId,
        phoneNo: PhoneNo,
        street: Street,
        city: City,
        latitude: Latitude,
        longitude: Longitude
      };
      this.rows.push(row);
      this.rows = [...this.rows];
    });
  }

}
