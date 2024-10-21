import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Atendimento } from '../../../model/atendimento';
import { IList } from '../../i-list';

@Component({
  selector: 'app-agenda-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agenda-list.component.html',
  styles: ``
})
export class AgendaListComponent implements IList<Atendimento> {

  ngOnInit(): void {
    fetch('./assets/agendamentos.json')
      .then(resposta => resposta.json())
      .then(dados => { this.registros = dados; });
  }

  registros: Atendimento[] = [];

  get(termoBusca?: string | undefined): void {
    throw new Error('Method not implemented.');
  }

  delete(id: number): void {
    console.log('delete', id);
  }

}
