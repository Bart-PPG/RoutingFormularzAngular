import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ciag',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ciag.component.html',
  styleUrl: './ciag.component.css'
})
export class CiagComponent {
  tablicaLiczb:number[] = []
  liczba = 0
  roznica = 0
  liczbaWyrazowCiagu = 0

  ciag(){
    this.tablicaLiczb=[]
    this.tablicaLiczb.push(this.liczba);
    for(let i = 1;i < this.liczbaWyrazowCiagu;i++){
      this.tablicaLiczb[i]= this.tablicaLiczb[i-1]+this.roznica
    }

  }
}
