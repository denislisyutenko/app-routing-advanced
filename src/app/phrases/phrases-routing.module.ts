import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PhraseDetailsComponent} from './phrase-details/phrase-details.component';
import {PhrasesHostComponent} from './phrases-host/phrases-host.component';
import {PhrasesListComponent} from './phrases-list/phrases-list.component';
import {CanDeactivateGuard} from '../shared/can-deactivate.guard';
import {PhraseDetailsResolver} from '../shared/phrase-details.resolver';

const routes: Routes = [
  {
    path: 'phrases',
    component: PhrasesHostComponent,
    children: [
      {
        path: '',
        component: PhrasesListComponent,
        children: [
          {
            path: ':id',
            component: PhraseDetailsComponent,
            canDeactivate: [CanDeactivateGuard],
            resolve: {
              phrase: PhraseDetailsResolver
            }
          },
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhrasesRoutingModule {
}
