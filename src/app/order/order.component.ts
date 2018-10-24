import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option-model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentsOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REG'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
