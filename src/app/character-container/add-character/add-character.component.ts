import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent implements OnInit {
  input: string = '';
  characters: string[] = [];

  constructor() {}

  addInput(input: string) {
    this.characters.push(input);
    this.input = '';
    console.log(this.characters);
  }

  ngOnInit(): void {}
}
