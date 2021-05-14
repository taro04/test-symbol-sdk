import { Component, OnInit } from '@angular/core';
import { Base32 } from 'symbol-sdk'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() {
    //base32:Base32
   }

  ngOnInit(): void {
  }

  base :string= "symbol-nem"

  varout = Base32.Base32Decode(this.base)


}
