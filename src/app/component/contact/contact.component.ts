import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormDataService} from "../../service/form-data.service";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  public isChecked:boolean = false;
  public contactForm: FormGroup = this.data.group(
    {
      firstName : new FormControl('', [Validators.required]),
      lastName : new FormControl('', [Validators.required]),
      age : new FormControl('',[
        Validators.pattern('^[0-9]*$'), // Validation pour accepter uniquement des chiffres
      ]),
      email : new FormControl('', [Validators.required, Validators.email]),
      comment: new FormControl('', [Validators.required]),
    }
  );

  constructor(private data : FormBuilder, private router: Router,private dataToSend: FormDataService) { }

  sendCommentaire(){
    alert("Le formulaire est valide");
    this.dataToSend.setLastForm(this.contactForm.value);
    this.router.navigate(['/']);
  }

  doCheck() {
    this.isChecked = !this.isChecked;
    if (!this.isChecked) {
      this.contactForm.get('email')?.setValidators([Validators.required, Validators.email]);
    } else {
      this.contactForm.get('email')?.clearValidators();
      this.contactForm.get('email')?.setValue('');
    }
    this.contactForm.get('email')?.updateValueAndValidity();
  }
}
