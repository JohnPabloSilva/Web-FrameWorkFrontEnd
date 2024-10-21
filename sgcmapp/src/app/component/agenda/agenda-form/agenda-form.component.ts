import { Component } from '@angular/core';
import { IForm } from '../../i-form';
import { Atendimento } from '../../../model/atendimento';

@Component({
  selector: 'app-agenda-form',
  standalone: true,
  imports: [],
  templateUrl: './agenda-form.component.html',
  styles: ``
})
export class AgendaFormComponent implements IForm<Atendimento> {

  registro: Atendimento = <Atendimento>{};

  save(): void {
    throw new Error('Method not implemented.');
  }

}
