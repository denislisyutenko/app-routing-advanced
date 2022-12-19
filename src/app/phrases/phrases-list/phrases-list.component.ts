import {Component, OnInit} from '@angular/core';
import {Phrase} from '../../shared/phrase';
import {PhrasesService} from '../../shared/phrases.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-phrases-list',
  templateUrl: './phrases-list.component.html',
  styleUrls: ['./phrases-list.component.scss']
})
export class PhrasesListComponent implements OnInit {

  phrases!: Phrase[];

  private selectedID!: number;

  constructor(private phrasesService: PhrasesService,
              private router: Router,
              private ActivatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe({
      next: params => {
        this.selectedID = +params['id'];
        this.phrasesService
          .getAllPhrases()
          .then(result => this.phrases = result);
      }
    });

  }

  onSelect(phrase: Phrase): void {
    this.router.navigate(['phrases', phrase.id]).then();
  }

  isSelected(phrase: Phrase): boolean {
    return phrase.id === this.selectedID;
  }

}
