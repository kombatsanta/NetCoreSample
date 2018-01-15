import { Component, OnInit } from '@angular/core';
import { ValuesService } from './../values.service';

@Component({
  selector: 'app-values-page',
  templateUrl: './values-page.component.html'
})
export class ValuesPageComponent implements OnInit {

  constructor(private valuesService: ValuesService) { }

  public valuesString: string;

  ngOnInit() {
    
  }

  onGetValues() {
    this.valuesString = "";
    this.valuesService.getValues().subscribe(result => {
      this.valuesString = result.data;
    });
  }

  onGetValuesSecure() {
    this.valuesString = "";
    this.valuesService.getValuesSecure().subscribe(result => {
      this.valuesString = result.data;
    });
  }

}
