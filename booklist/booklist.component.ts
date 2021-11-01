import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  books!: Book[];

  constructor(private service : EmployeeService, private router:Router) { }

  ngOnInit(): void {
    this.getBookList();
  }
  getBookList() {
    this.service.getBookList().subscribe(data => {
      this.books = data;
    });
  }

}
