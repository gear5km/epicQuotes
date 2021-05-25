import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component } from '@angular/core';
import { FormsModule ,ReactiveFormsModule , FormControl, Validators } from '@angular/forms';
import {quoteLibrary} from './quoteLibrary';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'epicQuotes';

  userID = new FormControl('',Validators.required); //For inputing a userID
  initializeQuoteInput=false;                       //Hides the QuoteInput Componoent until startProgram() is executed
  quoteLibraryDisplay = quoteLibrary;               //Gets existing Library array of quotes for display in the "quoteDisplayContainer" Element

  
  startProgram(clicked:boolean){
      this.initializeQuoteInput=true;               //Sets "initializeQuoteInput" to true, Enabling the quote input component
    }
    
  }

