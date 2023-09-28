import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataService } from "../../service/form-data.service";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  public checked: boolean = false;
  constructor(private data: FormBuilder, private router: Router, private dataToSend: FormDataService) { }

  public contactForm: FormGroup = this.data.group(
    {
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.pattern('^[0-9]*$'),]),
      email: new FormControl('', [Validators.required, Validators.email]),
      comment: new FormControl('', [Validators.required]),
    }
  );

  public submitForm() {
    alert("Formulaire validé bien jouée");
    this.dataToSend.setLastForm(this.contactForm.value);
    this.router.navigate(['/']);
  }

  public checkEmail() {
    this.checked = !this.checked;
    if (this.checked) {
      this.contactForm.get('email')?.clearValidators();
      this.contactForm.get('email')?.setValue('');
    } else {
      this.contactForm.get('email')?.setValidators([Validators.required, Validators.email]);
    }
    this.contactForm.get('email')?.updateValueAndValidity();
  }
}
