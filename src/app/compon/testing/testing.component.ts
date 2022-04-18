import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],
})
export class TestingComponent implements OnInit {
  constructor() {}
  @Output() sendData = new EventEmitter();
  ngOnInit(): void {
    this.sendData.emit('child data');
  }
}
