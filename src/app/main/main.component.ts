import { Component, OnInit } from '@angular/core';
import {Note} from '../Models/Note'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public notes: Note[]
  constructor() {
    this.notes=[]
    this.notes.push(new Note("Cumpleaños Sergio","El 19 es el cumpleaños de Sergio"));
   }

  ngOnInit(): void {
    
  }

}
