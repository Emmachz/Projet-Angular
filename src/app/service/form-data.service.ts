import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private lastForm!: User;
  constructor() { }

  public setLastForm(form: User) {
    this.lastForm = form;
  }

  public getLastForm() {
    return this.lastForm;
  }
}