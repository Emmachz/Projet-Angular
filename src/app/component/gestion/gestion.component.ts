import {Component, OnInit} from '@angular/core';
import {FormDataService} from "../../service/form-data.service";

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent {

  public getLastFormData: any = null ;

  constructor(private formService: FormDataService) {
  }

  ngOnInit(): void {
    this.getLastFormData = this.formService.getMessage();
    console.log(this.getLastFormData);
  }
}
