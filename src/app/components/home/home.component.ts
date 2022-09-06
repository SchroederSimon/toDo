import { Component, Directive, Injectable, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  
  imageObject = [{
    image: '/assets/imagenes/grafico2.png',
    thumbImage: '/assets/imagenes/grafico2.png',
    title: 'How people think it is'
}, {
    image: '/assets/imagenes/grafico1.png',
    thumbImage: '/assets/imagenes/grafico1.png',
    title: 'How actually is'
}];


  constructor() { 
  }

  ngOnInit(): void {
  }


}
