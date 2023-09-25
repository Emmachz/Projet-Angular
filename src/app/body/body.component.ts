import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  gifUrl: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {
    this.gifUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/nom-du-fichier.gif');
  }
  
}
