import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filmy',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filmy.component.html',
  styleUrl: './filmy.component.css'
})
export class FilmyComponent {
tytul = ""
rodzaj = ""

dodajFilm(){
  console.log("tytuł: "+this.tytul+" Rodzaj: "+ this.rodzaj)
}
}
