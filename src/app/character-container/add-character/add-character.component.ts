import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent implements OnInit {
  input: string = '';
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() {}

  addInput(input: string) {
    this.newItemEvent.emit(input);
    this.input = '';
    console.log(this.newItemEvent);
  }

  ngOnInit(): void {}
}
