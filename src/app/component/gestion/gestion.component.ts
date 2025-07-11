import { Component, OnInit } from '@angular/core';
import { FormDataService } from "../../service/form-data.service";
import { User } from '../../model/user.model';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {

  public getLastFormData !: User;

  constructor(private formService: FormDataService) {
  }

  public ngOnInit(): void {
    this.getLastFormData = this.formService.getLastForm();
  }
}
