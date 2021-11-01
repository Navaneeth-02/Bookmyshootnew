import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book: Book = new Book();

  alert: boolean=false;

  exform!: FormGroup;
  submitted = false;

  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'

  constructor(private service : EmployeeService, private router:Router, private fb : FormBuilder) { }

  ngOnInit(): void {
    this.exform = this.fb.group({
      name : ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  saveBooking(){
    this.service.doBook(this.book).subscribe(data =>{
      console.log("Successfully");
      this.alert=true;
    },
    error => console.log(error));
  }
    onSubmit()
    {
      console.log(this.book);
      this.saveBooking()
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
