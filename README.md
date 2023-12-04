# Show do Milhão

## Desenvolvedor:
  João Paulo Souza Silva

## Regras do Jogo
O jogo é composto por **5 rodadas** de perguntas, cada uma com quatro alternativas de resposta, sendo apenas uma delas a correta. As rodadas são estruturadas da seguinte maneira:

- **Rodada 1**:
  - **Dificuldade**: Muito Fácil
  - **Prêmio**: R\$ 60.000,00

- **Rodada 2**:
  - **Dificuldade**: Fácil
  - **Prêmio**: R\$ 125.000,00

- **Rodada 3**:
  - **Dificuldade**: Intermediário
  - **Prêmio**: R\$ 250.000,00

- **Rodada 4**:
  - **Dificuldade**: Difícil
  - **Prêmio**: R\$ 500.000,00

- **Rodada 5**:
  - **Dificuldade**: Muito Difícil
  - **Prêmio**: R\$ 1.000.000,00

Cada rodada aumenta o nível de dificuldade e o valor do prêmio, incentivando os jogadores a desafiarem seus conhecimentos em busca do grande prêmio final.

Durante o jogo, a interface do terminal deve exibir as seguintes informações no canto superior esquerdo da tela:
- **Nome do jogador**: Identificação do usuário no jogo.
- **Saldo atual**: Quantia total acumulada pelo jogador até o momento.
- **Valor ganho se acertar**: Potencial ganho financeiro caso a resposta esteja correta.
- **Valor ganho se errar**: Quantia garantida mesmo em caso de resposta incorreta.
- **Valor ganho se parar**: Valor que o jogador leva ao decidir parar o jogo.

Após cada pergunta ser respondida, o terminal deve informar se a resposta está correta ou incorreta, exibindo o saldo anterior e o saldo atualizado. Se o jogador acertar, o terminal perguntará se deseja continuar. Em caso negativo, o terminal apresentará o painel final e o jogo avançará para a próxima rodada. Se errar, o terminal também mostrará o painel final. Na quinta rodada, independentemente do resultado, o jogador será direcionado para o painel final.

O **painel final** deve exibir as seguintes informações:
- **Nome do jogador**: Confirmação da identidade do usuário.
- **Rodada final**: Em qual rodada o jogador decidiu parar ou errou.
- **Rodadas restantes**: Número de rodadas que faltavam para o término do jogo.
- **Resposta da última pergunta**: Apenas se o jogador tiver errado.
- **Valor do prêmio**: Total acumulado pelo jogador.
- **Opção de reinício**: Pergunta ao jogador se deseja iniciar uma nova partida.

As interações com o usuário devem ser claras e seguir os comandos especificados no terminal. As respostas às perguntas são identificadas por números inteiros de 1 a 4. Se o jogador inserir um número inválido, como 5, a resposta será automaticamente considerada errada. Para as perguntas "Deseja continuar jogando?" e "Deseja jogar novamente?", o terminal deve repetir a pergunta até que uma resposta válida seja fornecida pelo usuário.
## Como jogar

## Como executar

## Créditos 
- Fontes de referência utilizadas

## Licença do projeto
