import { Component, Input, OnChanges, OnInit,} from '@angular/core';
import {FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { from } from 'rxjs';
import {AppComponent}from '../app.component';
import {quoteLibrary} from '../quoteLibrary';

@Component({
  selector: 'app-quote-input',
  templateUrl: './quote-input.component.html',
  styleUrls: ['./quote-input.component.css']
})
export class QuoteInputComponent implements OnInit {

  @Input() userID;
  userQuote=new FormControl('');          //Takes in a quote from the user
  userAuthour=new FormControl('');        //Takes in an author from the user
  quoteLibraryInput=quoteLibrary;         //Link the the existing array library of quotes

  constructor() {
    
  }


  ngOnInit() {
    
  }

  onSubmit(){
    quoteLibrary.push(
      {quoteContent:this.userQuote.value,quoteAuthor:this.userAuthour.value,quoteRating:5,quotePoster:this.userID.value}
      )
  }

}
