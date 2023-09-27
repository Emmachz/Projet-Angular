import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  public films = [
    { titre: 'Le Voyage de Chihiro', affiche: './../../assets/chihiro.jpg' },
    { titre: 'Mon Voisin TOTORO', affiche: './../../assets/totoro.jpeg' },
    { titre: 'Le Chateau Ambulant', affiche: './../../assets/chateauambulant.jpeg' },
    { titre: 'Ponyo Sur La Falaise', affiche: './../../assets/ponyo.webp' },
    { titre: 'Your Name', affiche: './../../assets/yourname.jpeg' }
  ];

  filmSelectionne: any;

  afficherFilm(film: any): void {
    this.filmSelectionne = film;
  }
}
