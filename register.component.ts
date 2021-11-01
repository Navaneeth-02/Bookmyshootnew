import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import{ EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 employee: Employee = new Employee();

 alert: boolean= false;

 exform!: FormGroup;

 submitted = false;
 emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
 passwordPtn ='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$'
  constructor(private service : EmployeeService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.exform = this.fb.group({
      name : ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
      confirmpassword:['',[Validators.required]],
    });
  }

  saveEmployee(){
    this.service.createEmployee(this.employee).subscribe( data =>{
      console.log("Successfully");
     // this.goToEmployeeList();
     this.alert = true;
     this.exform.reset();
    },
    error => console.log(error));
  }

  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
    //this.exform.reset();
  }

  closeAlert()
  {
    this.alert=false;
  }

  get f()
   { 
     return this.exform.controls; 
   }
   get f1()
   {
    return this.exform.controls; 
   }
   get f2()
   {
     return this.exform.controls;
   }
   get f3()
   {
     return this.exform.controls;
   }
}
