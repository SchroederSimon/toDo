import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})



export class MainContentComponent implements OnInit {
  
  tasks = [
    { id: 1, description: "Get up on time", isChecked: false},
    { id: 2, description: "Work out", isChecked: false},
    { id: 3, description: "Healthy breakfast", isChecked: false},
    { id: 4, description: "Work",  isChecked: false}
  ];


  constructor() { }

  ngOnInit(): void {
  }

  }





// <hello name="{{ name }}"></hello>
// <p>
//   Start editing to see some magic happen :)
// </p>

// <ul>
//   <ng-container *ngFor="let item of items">
//     <li>
//       <input 
//          type="checkbox" 
//         [value]="item.value"
//         [checked]="item.isChecked"
//         (change)="onChange($event);"
//         > {{item.label}}
//     </li>
//   </ng-container>
// </ul>
