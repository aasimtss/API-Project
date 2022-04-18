import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor() {}
  value = '';
  ngOnInit(): void {}

  public sendData(value: string) {
    this.value = value;
  }
}
