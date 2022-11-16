import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent implements OnInit {
  @ViewChild('myinput', { static: true }) myinput: string;
  @Input() characters: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  change(event: any) {
    this.characters.push(this.myinput);
    console.log(this.characters);
  }
}
