import {Component, OnInit} from '@angular/core';
import {Phrase} from '../shared/phrase';
import {PhrasesService} from '../shared/phrases.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-phrases-list',
  templateUrl: './phrases-list.component.html',
  styleUrls: ['./phrases-list.component.scss']
})
export class PhrasesListComponent implements OnInit {

  phrases!: Phrase[];

  constructor(private phrasesService: PhrasesService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.phrasesService
      .getAllPhrases()
      .then(result => this.phrases = result);
  }

  onSelect(phrase: Phrase): void {
    this.router.navigate(['phrase', phrase.id]).then();
  }

}
