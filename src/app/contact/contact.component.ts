import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  public formulaire: FormGroup;
  public validemail= false;

  constructor(private formBuilder: FormBuilder) {
    this.formulaire = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: [''],
      checkboxHideEmail: [''],
      email: ['', [Validators.required, Validators.email]],
      comment: ['']
    });
  }

  onSubmit() {
    if (this.formulaire.valid) {
      alert('Le formulaire est valide');
      console.log('Données du formulaire soumises :', this.formulaire.value);
    }
  }

  

}
