import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  public movies = [
    { title: 'Le Voyage de Chihiro', poster: './../../assets/chihiro.jpg' },
    { title: 'Mon Voisin TOTORO', poster: './../../assets/totoro.jpeg' },
    { title: 'Le Chateau Ambulant', poster: './../../assets/chateauambulant.jpeg' },
    { title: 'Ponyo Sur La Falaise', poster: './../../assets/ponyo.webp' },
    { title: 'Le Tombeau Des Lucioles', poster: './../../assets/tombeau.webp' }
  ];

  public selectedMovie:{title:string, poster:string}|null=null;

  public showmovie(movie:{title: string, poster:string}){
    this.selectedMovie=movie;
  }
  
}
