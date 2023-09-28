import { Injectable } from '@angular/core';
import {FormGroup} from "@angular/forms";
import { User } from '../component/contact/user.model';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private lastForm!: User;
  constructor() { }

  public setLastForm(form: User) {
   this.lastForm = form;
  }

  public getMessage(){
    return this.lastForm;
  }
}