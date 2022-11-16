import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent implements OnInit {
  @Input() input!: HTMLInputElement;
  @Input() characters: string[];

  constructor() {}

  ngOnInit(): void {
    this.characters = [];
  }

  displayInput(input: HTMLInputElement): void {
    this.characters.push(input.value);
    console.log(this.characters);
  }
}
