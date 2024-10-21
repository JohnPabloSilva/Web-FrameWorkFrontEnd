[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/rPkdQiKR)
# Atividade prática: Diretiva NgFor

Atividade prática da disciplina Frameworks Front-end

## Descrição

Modificar o template do `AtendimentoComponent` para exibir o conteúdo da variável `registros` na tabela, semelhante ao que foi feito no `AgendaListComponent`, utilizando a diretiva `NgFor`, e atendendo aos seguintes critérios:

- O conteúdo deve ser carregado a partir do arquivo `atendimentos.json` (já implementado).
- O total de registros no rodapé da tabela deve refletir a quantidade de registros exibidos.
- Caso não haja registros, deve exibir a mensagem "Nenhum registro encontrado" no rodapé da tabela.
- Quando o status do atendimento for `ATENDIMENTO`, o botão `Iniciar` deve ficar oculto e o botão `Finalizar` deve ser exibido.
- Quando o status do atendimento for `CHEGADA`, o botão `Finalizar` deve ficar oculto e o botão `Iniciar` deve ser exibido.

## Avaliação

Esta atividade prática será avaliada automaticamente, por meio dos seguintes testes:

| Teste | Descrição | Comando |
|-------|-----------|---------|
| Teste Geral | Verifica se a aplicação inicia normalmente e se o componente Atendimento exibe os dados corretamente | `ng test --browsers ChromeHeadless` |

> [!TIP]
> Um ícone ao lado da mensagem de commit indica se a atividade foi validada :heavy_check_mark: ou não :x:.
