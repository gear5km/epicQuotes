import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component } from '@angular/core';
import { FormsModule ,ReactiveFormsModule , FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'epicQuotes';

  userID = new FormControl('',Validators.required);

  startProgram(){
    
      alert(this.userID.value);
    }
    
  }

