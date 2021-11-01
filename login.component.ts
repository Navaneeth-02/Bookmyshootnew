import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{ EmployeeService } from '../employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  alert:boolean=false

  userName: string = ""
  password: string = ""

  exform!: FormGroup;
  submitted = false;
  constructor(private service : EmployeeService, private router : Router, private fb : FormBuilder) { }

  ngOnInit(): void {
    this.exform=this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  doLogin(){
    this.service.doLogin(this.userName, this.password).subscribe( data => {
      console.log(data.message);

      this.alert = true;
      this.exform.reset();
    },
    error => console.log(error.message));
  }

  onSubmit(){
    this.doLogin();
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

}
