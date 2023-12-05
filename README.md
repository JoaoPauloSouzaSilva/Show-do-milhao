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
- **Saldo atual**: Quantia total do jogador até o momento.
- **Valor ganho se acertar**: Potencial ganho financeiro caso a resposta esteja correta.
- **Valor ganho se errar**: Quantia ganha em caso de resposta incorreta.
- **Valor ganho se parar**: Valor que o jogador leva ao decidir parar o jogo.

Após cada pergunta ser respondida, o terminal deve informar se a resposta está correta ou incorreta, exibindo o saldo anterior e o saldo atualizado. Se o jogador acertar, o terminal perguntará se deseja continuar. Em caso de resposta negativa, será exibido o painel final; em caso afirmativo, o jogo avançará para a próxima rodada. No caso de erro, o terminal também apresentará o painel final. Na quinta rodada, independentemente do desempenho, o jogador será automaticamente redirecionado para o painel final.

O **painel final** deve exibir as seguintes informações:
- **Nome do jogador**: Confirmação da identidade do usuário.
- **Rodada final**: Em qual rodada o jogador decidiu parar ou errou.
- **Rodadas restantes**: Número de rodadas que faltavam para o término do jogo.
- **Resposta da última pergunta**: Apenas se o jogador tiver errado.
- **Valor do prêmio**: Total alcançado pelo jogador.
- **Opção de reinício**: Pergunta ao jogador se deseja iniciar uma nova partida.

As interações com o usuário devem ser claras e seguir os comandos especificados no terminal. As respostas às perguntas são identificadas por números inteiros de 1 a 4. Se o jogador inserir um número inválido, como 5, a resposta será automaticamente considerada errada. Para as perguntas "Deseja continuar jogando?" e "Deseja jogar novamente?", o terminal deve repetir a pergunta até que uma resposta válida seja fornecida pelo usuário.

## Como jogar

Quando o jogo é iniciado, o terminal solicitará que o jogador insira seu **nome**. Em seguida, a primeira de um total de cinco perguntas será exibida. Para responder, o jogador deve inserir o número correspondente à opção que acredita ser a correta.

Se uma **resposta inválida** for inserida, ou seja, um número que não corresponda a nenhuma das opções de resposta, o sistema identificará a resposta como incorreta. Portanto, é importante prestar atenção antes de responder. Se o jogador acertar a pergunta, o terminal perguntará se deseja **continuar jogando**, oferecendo duas opções numéricas. Se um valor inválido for inserido, o terminal repetirá a pergunta até receber uma resposta válida.

Se o jogador optar por continuar, a próxima pergunta será apresentada. Este processo continua até a **rodada 5**, onde, independentemente do resultado, o terminal exibirá o **painel final**. Se o jogador errar uma pergunta antes da quinta rodada, o terminal também mostrará o painel final.

No painel final, o terminal mostrará as informações sobre o jogo e perguntará se o jogador deseja **jogar novamente**, fornecendo duas opções numéricas. Se uma resposta inválida for inserida, a pergunta será repetida até que uma resposta válida seja dada. Se a opção escolhida for continuar jogando, o jogo será reiniciado. Se a opção for parar de jogar, o processo será finalizado e o jogo terminará.

## Como executar
Para jogar o "Show do Milhão", siga os passos abaixo para configurar e iniciar o jogo em sua máquina:

1. **Clone o Repositório**:
   - Utilize o Git para clonar o repositório do jogo para sua máquina local.
   - Abra o diretório onde deseja clonar o projeto.
   - Clique com o botão direito do mouse e selecione "Git Bash Here" (ou "Abrir Git Bash Aqui").
   - No Git Bash, digite o comando:
     ```
     git clone https://github.com/JoaoPauloSouzaSilva/Show-do-milhao.git
     ```
   - Para colar o comando no Git Bash, utilize `Shift + Insert`.

2. **Acesse a Pasta do Projeto**:
   - Ainda no Git Bash, navegue até a pasta do projeto com o comando:
     ```
     cd Show-do-milhao
     ```

3. **Abra o Projeto na IDE**:
   - Feche o Git Bash e abra a pasta do projeto com sua IDE de preferência, como o Visual Studio Code.
   - Clique com o botão direito no diretório do projeto e escolha "Abrir com Code" (ou "Open with Code").

4. **Inicie o Jogo**:
   - Na IDE, abra um novo terminal (atalho: `Ctrl + Shift + ‘`).
   - Digite o comando:
       ```
      npm install
      ```
   - Em seguinda digite o comando:
      ```
      npm start
      ```
   - O jogo será iniciado e você poderá começar a jogar.

**Nota Importante**: Certifique-se de ter o Node.js instalado em sua máquina para que o projeto funcione corretamente.

Siga estas instruções para configurar o ambiente e iniciar o jogo "Show do Milhão" em sua máquina local.


## Créditos 
Este projeto foi desenvolvido com base na colaboração e troca de conhecimentos entre os colegas que estão trabalhando na mesma atividade. Além disso, contou com o apoio dos recursos oferecidos pelos serviços de chat GPT e chat Bing.

A colaboração entre colegas desempenhou um papel fundamental no desenvolvimento deste projeto. A troca de experiências e ideias contribuiu significativamente para a resolução de desafios e para o aprimoramento das soluções adotadas.

O Chat GPT, um assistente de linguagem natural, ofereceu suporte valioso ao fornecer informações e sugestões durante o desenvolvimento. Sua capacidade de compreensão contextual e geração de texto contribuiu para a resolução de questões específicas do projeto.

Além disso, o Chat Bing também desempenhou um papel importante na obtenção de informações e esclarecimentos específicos. Ao fornecer resultados de busca relevantes, contribuiu para a obtenção de conhecimentos adicionais quando necessário.

Devido à natureza da tarefa e ao nível de dificuldade moderado, não foi necessário recorrer a fontes de pesquisa adicionais. A colaboração entre os envolvidos e o suporte oferecido pelos chats foram suficientes para atender aos requisitos do projeto.

## Licença do projeto
Este projeto, "Show do Milhão", é disponibilizado sob a Licença Aberta, permitindo o uso, distribuição e modificação por qualquer pessoa, para qualquer propósito, comercial ou não.