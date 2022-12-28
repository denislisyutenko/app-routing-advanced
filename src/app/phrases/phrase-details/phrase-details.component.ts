import {Component, OnInit} from '@angular/core';
import {Phrase} from '../../shared/phrase';
import {PhrasesService} from '../../shared/phrases.service';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {AuthService} from '../../shared/auth.service';
import {CanComponentDeactivate} from '../../shared/can-deactivate.guard';


@Component({
  selector: 'app-phrase-details',
  templateUrl: './phrase-details.component.html',
  styleUrls: ['./phrase-details.component.scss']
})
export class PhraseDetailsComponent implements OnInit, CanComponentDeactivate {

  phrase!: Phrase;
  editValue?: string;
  editLanguage?: string;

  constructor(private phrasesService: PhrasesService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              public authService: AuthService) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe({
      next: (data: Data) => {
        this.phrase = data['phrase'];
        this.editValue = this.phrase?.value;
        this.editLanguage = this.phrase?.language;
      },
      error: err => console.log(err)
    });
  }

  gotoPhrasesList(): void {
    this.router.navigate(['/phrases', {
      id: this.phrase?.id,
      param1: 'test',
      param2: 'test',
    }], {
      relativeTo: this.activatedRoute
    }).then();
  }

  isChanged(): boolean {
    return !(this.phrase?.value === this.editValue && this.phrase?.language === this.editLanguage);
  }

  save(): void {
    if (this.phrase) {
      this.phrase.value = this.editValue || 'empty';
      this.phrase.language = this.editLanguage || 'empty';
    }
  }

  canDeactivate(): boolean {
    if (!this.phrase) return true;
    if (!this.isChanged()) return true;
    return confirm('Ви не зберегли зміни. \nДані будуть втрачені. \nПіти зі сторінки у будь-якому випадку?');
  }

}
