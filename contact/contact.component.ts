import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../employee';
import { EmployeeService } from '../employee.service';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: Contact = new Contact();

  alert: boolean = false;
  registerForm!:FormGroup;
  submitted = false;

  constructor(private service : EmployeeService, private router:Router, private fb:FormBuilder)    { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      comment:['',[Validators.required, Validators.minLength(10)]]
    });
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  savecomplaint(){
    this.service.doComplain(this.contact).subscribe( data =>{
      console.log("Successfully");
        this.alert=true;
      },
      error => console.log(error));
  }



  onSubmit()
  {
    console.log(this.contact);
    this.savecomplaint();
  }
  /*onSubmit() {
    this.submitted = true;
  // console.log(this.contact);
    if (this.registerForm.valid) 
    {
      console.log(this.registerForm.value);
      this.savecomplaint();
    }
  }*/

  closeAlert()
  {
    this.alert=false;
  }

}
