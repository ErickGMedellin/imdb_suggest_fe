import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-logo',
  standalone: true,
  imports: [],
  templateUrl: './main-logo.component.html',
  styleUrl: './main-logo.component.css'
})

export class MainLogoComponent implements OnInit{

  phrase?: string;

  constructor() {}

  phraseList: string[] = [
    "Tiburoncín, uh ha ha!",
    "___ llama a casa",
    "Legen......dary!",
    "En una galaxia muy muy lejana...",
    "A mí nadie me dice gallina"
  ]

  ngOnInit(): void {
    this.selectRandomPhrase();
  }

  selectRandomPhrase(): void {
    const randomIndex = Math.floor(Math.random() * this.phraseList.length);
    this.phrase = this.phraseList[randomIndex];
  }

}
