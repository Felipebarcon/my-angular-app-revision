import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-container',
  templateUrl: './character-container.component.html',
  styleUrls: ['./character-container.component.css'],
})
export class CharacterContainerComponent implements OnInit {
  characters: string[] = [];

  constructor() {}

  addInput(input: string) {
    this.characters.push(input);
  }

  ngOnInit(): void {}
}
