import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})




export class MainContentComponent implements OnInit {
  
  today = new Date();


  tasks = [
    { id: 1, description: "Get up on time", selected: false},
    { id: 2, description: "Work out", selected: false},
    { id: 3, description: "Healthy breakfast", selected: false},
    { id: 4, description: "Write coe (3h)",  selected: false},
    { id: 5, description: "Study english",  selected: false},
    { id: 6, description: "Take a nap",  selected: false},
    { id: 7, description: "Read about crypto",  selected: false},
    { id: 8, description: "Work on self projects",  selected: false}
  ];


  constructor() {
   }

  onChangeTask(event: any){
    const id = event.target.value;
    const isChecked = event.target.checked;
    console.log(id, isChecked)
  }


  ngOnInit(): void {
  }


  }
