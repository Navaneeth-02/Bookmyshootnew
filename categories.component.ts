import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  myimage:string = "assets/images/pic41.jpg";

  myimage1:string = "assets/images/pic25.jpg";

  myimage2:string = "assets/images/pic28.jpg";

  myimage3:string = "assets/images/pic32.jpg";

  myimage4:string = "assets/images/pic27.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
