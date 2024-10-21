import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Atendimento } from '../../model/atendimento';
import { IList } from '../i-list';

@Component({
  selector: 'app-atendimento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './atendimento.component.html',
  styles: ``
})
export class AtendimentoComponent implements IList<Atendimento> {

  ngOnInit(): void {
    fetch('./assets/atendimentos.json')
      .then(resposta => resposta.json())
      .then(dados => { this.registros = dados; });
  }

  registros: Atendimento[] = [];
  
  get(termoBusca?: string | undefined): void {
    throw new Error('Method not implemented.');
  }

  delete(id: number): void {
    throw new Error('Method not implemented.');
  }

}
