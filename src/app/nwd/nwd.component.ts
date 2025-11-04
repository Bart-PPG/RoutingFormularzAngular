import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nwd',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nwd.component.html',
  styleUrl: './nwd.component.css'
})
export class NwdComponent {
  a=0
  b=0
  nwd=0

  obliczNWD(){
      let a= this.a
      let b = this.b
    while(a !=b)
      if(a>b)
        a = a -b
      else
        b =b-a
      
    this.nwd = a

  }
}

