import { Routes } from '@angular/router';
import { AgendaListComponent } from './component/agenda/agenda-list/agenda-list.component';
import { AgendaFormComponent } from './component/agenda/agenda-form/agenda-form.component';
import { AtendimentoComponent } from './component/atendimento/atendimento.component';

export const routes: Routes = [
    { path: 'agenda-list', component: AgendaListComponent },
    { path: 'agenda-form', component: AgendaFormComponent },
    { path: 'atendimento', component: AtendimentoComponent },
    { path: '**', redirectTo: '' }
];
