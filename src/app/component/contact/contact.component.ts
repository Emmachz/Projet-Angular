import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {FormDataService} from "../../service/form-data.service";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  public isChecked:boolean = false;
  public contactForm = new FormGroup(
    {
      firstName : new FormControl('', [Validators.required]),
      lastName : new FormControl('', [Validators.required]),
      age : new FormControl(''),
      email : new FormControl('', [Validators.required, Validators.email]),
      comment: new FormControl('', [Validators.required]),
    }
  );

  constructor(private router: Router,private dataToSend: FormDataService) { }

  sendCommentaire(){
    alert("Le formulaire est valide");
    this.dataToSend.setLastForm(this.contactForm);
    this.router.navigate(['/']);
  }

  doCheck() {
    this.isChecked = !this.isChecked;
    console.log("test");
    if (!this.isChecked) {
      this.contactForm.get('email')?.setValidators([Validators.required, Validators.email]);
    } else {
      this.contactForm.get('email')?.clearValidators();
      this.contactForm.get('email')?.setValue('');
    }
    this.contactForm.get('email')?.updateValueAndValidity();
  }

}
