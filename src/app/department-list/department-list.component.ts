import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
   <h3>Department List</h3>
   <ul class = "items">
    <li (click)="onSelect(department)" *ngFor="let department of departments">
      <span class="badge">{{department.id}}</span>{{department.name}}
    </li>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  constructor(private router:Router) { }

  departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "MongoDB"},
    {"id": 3, "name": "Node"},
    {"id": 4, "name": "Springboot"},
    {"id": 5, "name": "Bootstrap"},
  ]

  ngOnInit() {
  }

  onSelect(department)
  {
      this.router.navigate(['/departments', department.id])
  }

}
