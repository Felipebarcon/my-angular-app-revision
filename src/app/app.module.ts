import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListCharacterComponent } from './character-container/list-character/list-character.component';
import { AddCharacterComponent } from './character-container/add-character/add-character.component';
import { FormsModule } from '@angular/forms';
import { CharacterContainerComponent } from './character-container/character-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListCharacterComponent,
    AddCharacterComponent,
    CharacterContainerComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
