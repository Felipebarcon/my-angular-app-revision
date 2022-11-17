import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-character',
  templateUrl: './list-character.component.html',
  styleUrls: ['./list-character.component.css'],
})
export class ListCharacterComponent implements OnInit {
  @Input() characters: string[];

  constructor() {}

  ngOnInit(): void {}
}
