import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})



export class MainContentComponent implements OnInit {
  
  tasks = [
    { id: 1, description: "Get up on time", selected: false},
    { id: 2, description: "Work out", selected: false},
    { id: 3, description: "Healthy breakfast", selected: false},
    { id: 4, description: "Work",  selected: false},
    { id: 4, description: "Study english",  selected: false},
    { id: 4, description: "Take a nap",  selected: false},
    { id: 4, description: "Work",  selected: false},
    { id: 4, description: "Work on self projects",  selected: false}
  ];


  constructor() { }

  onChangeTask(event: any){
    const id = event.target.value;
    const isChecked = event.target.checked;
    console.log(id, isChecked)
  }

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
