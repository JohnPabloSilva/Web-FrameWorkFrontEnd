import { ComponentFixture, TestBed } from '@angular/core/testing';

import mockAtendimentos from '../../../assets/atendimentos.json';
import { AtendimentoComponent } from './atendimento.component';

describe('AtendimentoComponent', () => {
  let component: AtendimentoComponent;
  let fixture: ComponentFixture<AtendimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtendimentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtendimentoComponent);
    component = fixture.componentInstance;

    spyOn(window, 'fetch').and.returnValue(Promise.resolve({
      json: () => Promise.resolve(mockAtendimentos)
    } as Response));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve carregar 5 registros do arquivo JSON', async () => {
    await fixture.whenStable();
    expect(component.registros.length).toBe(mockAtendimentos.length);
  });

  it('deve exibir 5 registros na tabela', () => {
    component.registros = mockAtendimentos;
    fixture.detectChanges();
    let corpoTabela = fixture.nativeElement.querySelector('tbody');
    let linhas = corpoTabela.querySelectorAll('tr');
    expect(linhas.length).toBe(mockAtendimentos.length);
  });

  it('deve exibir os nomes dos 5 pacientes', () => {
    component.registros = mockAtendimentos;
    fixture.detectChanges();
    let linhas = fixture.nativeElement.querySelectorAll('table > tbody > tr');
    linhas.forEach((linha: any, index: any) => {
      const colunaPaciente = linha.cells[2];
      const textoCelula = colunaPaciente.textContent.trim();
      expect(textoCelula).toEqual(mockAtendimentos[index].paciente.nome);
    });
  });

  it ('deve exibir o total de registros', () => {
    component.registros = mockAtendimentos;
    fixture.detectChanges();
    let totalRegistros = fixture.nativeElement.querySelector('tfoot > tr > td > span');
    expect(totalRegistros.textContent).toContain(mockAtendimentos.length);
  });

  it('deve exibir mensagem de nenhum registro encontrado', () => {
    component.registros = [];
    fixture.detectChanges();
    let mensagem = fixture.nativeElement.querySelector('tfoot > tr > td > span');
    expect(mensagem.textContent).toContain('Nenhum registro encontrado');
  });

  it('deve exibir o botão iniciar quando o status for chegada', () => {
    component.registros = mockAtendimentos;
    fixture.detectChanges();
    let linhas = fixture.nativeElement.querySelectorAll('table > tbody > tr');
    linhas.forEach((linha: any, index: any) => {
      const colunaAtendimento = linha.cells[6];
      const botao = colunaAtendimento.querySelector('a.inativo');
      if (mockAtendimentos[index].status === 'CHEGADA') {
        expect(botao.textContent).toContain('Finalizar');
      } else if (mockAtendimentos[index].status === 'ATENDIMENTO') {
        expect(botao.textContent).toContain('Iniciar');
      }
    });
  });
});
