import { Injectable } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  public lastForm: any = null;
  constructor() { }

  public setLastForm(form: FormGroup) {
    this.lastForm = form;
  }

  public getMessage(){
    return this.lastForm;
  }
}