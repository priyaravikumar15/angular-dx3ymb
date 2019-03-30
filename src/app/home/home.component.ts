import { Component, OnInit } from '@angular/core';
import { Router,Routes } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
goshop()
{
  this.router.navigate(['Shop']);
}
}