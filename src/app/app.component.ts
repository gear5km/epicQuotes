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

  userID = new FormControl('',Validators.required);
  initializeQuoteInput=false;

  quoteLibraryDisplay=quoteLibrary;
  


  startProgram(clicked:boolean){

      //alert(this.userID.value);
      this.initializeQuoteInput=true;
      //alert(quoteLibrary[0].quoteContent)
    }
    
  }

