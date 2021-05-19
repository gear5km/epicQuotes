import { Component, Input, OnChanges, OnInit,} from '@angular/core';
import {FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { from } from 'rxjs';
import {AppComponent}from '../app.component';

@Component({
  selector: 'app-quote-input',
  templateUrl: './quote-input.component.html',
  styleUrls: ['./quote-input.component.css']
})
export class QuoteInputComponent implements OnInit {

  @Input() userID;
  userQuote=new FormControl('');
  userAuthour=new FormControl('');;

  constructor() {
    
  }

  onSubmit(){}

  ngOnInit() {
    
  }

}
