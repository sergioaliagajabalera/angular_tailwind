import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Note} from '../Models/Note'


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public notes: Note[]
  nameForm=new FormControl();
  descriptionForm=new FormControl();
  constructor() {
    this.notes=[]

    document.addEventListener('click', (clickEvent: MouseEvent) => {
      console.log('Click Event Details: ', clickEvent)
    })
   }

  ngOnInit(): void {
    
  }



  saveNote(){
    console.log("hola");
    this.notes.push(new Note(this.nameForm.value,this.descriptionForm.value));
  }

}
