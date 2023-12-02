const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



class Jogo {
  constructor() {
    this.saldo = 0;
    this.numrodada = 0;
  }
  
  async fazerPergunta(pergunta) {
    // nome do jogador

    this.numrodada += 1;
    console.log(`Rodada ${this.numrodada}`)
    console.log('  ');

    console.log(pergunta.texto);
    pergunta.opcoes.forEach((opcao, index) => {
      console.log(`${index + 1}. ${opcao}`);
    });

    const respostaUsuario = await new Promise(resolve => {
      rl.question('Escolha a opção correta (digite o número): ', resolve);
    });

    return this.verificarResposta(pergunta, respostaUsuario);
  }

  verificarResposta(pergunta, respostaUsuario) {
    console.clear();
    const indiceRespostaCorreta = pergunta.opcoes.indexOf(pergunta.respostaCorreta) + 1;
    if (parseInt(respostaUsuario) === indiceRespostaCorreta) {
      console.log(`  `);
      console.log(`Correto! Você ganhou R$${pergunta.valor}`);
      console.log(`  `);
      this.saldo += pergunta.valor;
      console.log(`Seu saldo é: R$${this.saldo}`);
      console.log(`  `);
      this.proximonivel();
      return true;
    } else {
      console.log('Resposta incorreta. Você perdeu tudo!');
      console.log(`  `); 
      this.saldo = 0;
      console.log(`Seu saldo é: R$${this.saldo}`);
      return false;
    }

  }

  async proximonivel() {
    console.log(`---------------------------------------------------------`);
    console.log('Deseja parar por aqui? ');
    console.log('[ 1 ] Sim.');
    console.log('[ 2 ] Não.');
    rl.question('(digite o número)', (valor) => {
      let proseguir = valor;

      if (proseguir.trim() === '1') {
        console.log(`  `);
        console.log('Você escolheu parar o jogo.');
        rl.close(); // Feche a interface readline após processar a entrada

        // Implemente a lógica para quando o jogador decide parar
        // vai para painelfinal();

      } else if (proseguir.trim() === '2') {
        console.log(`  `);
        console.log('Você escolheu continuar o jogo.');

        // Implemente a lógica para continuar para o próximo nível ou painel final

        //guarda os nivei no vetor e toda vez que continuar ele passa pro 
          //proxima e o ultimo é o painel final

      } else {
        console.log(`  `);
        console.log('Entrada inválida. Por favor, digite 1 ou 2.');
        proximonivel(); // Chama a função novamente se a entrada for inválida
      }
      callback();
    });
    
  }

  async painelfinal (){
    // painel final 
  }

  async nivel1() {
    const perguntasNivel1 = [
      {
        "texto": "Qual é a capital do Brasil? 1",
        "opcoes": ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
        "respostaCorreta": "Brasília",
        "valor": 1000
      },
      {
        "texto": "Qual é a capital do Brasil? 2",
        "opcoes": ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
        "respostaCorreta": "Brasília",
        "valor": 1000
      },
      {
        "texto": "Qual é a capital do Brasil? 3",
        "opcoes": ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
        "respostaCorreta": "Brasília",
        "valor": 1000
      }
    ];

    const perguntaAleatoriaNivel1 = perguntasNivel1[Math.floor(Math.random() * perguntasNivel1.length)];
    const acertou = await this.fazerPergunta(perguntaAleatoriaNivel1);

    rl.close();
  }

  async nivel2() {
    const perguntasNivel2 = [
      {
        "texto": "pergunta de viel2 1",
        "opcoes": ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
        "respostaCorreta": "Brasília",
        "valor": 10000
      },
      {
        "texto": "pergunta de viel2 2",
        "opcoes": ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
        "respostaCorreta": "Brasília",
        "valor": 10000
      },
      {
        "texto": "pergunta de viel2 3",
        "opcoes": ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
        "respostaCorreta": "Brasília",
        "valor": 10000
      }
    ];

    const perguntaAleatoriaNivel2 = perguntasNivel2[Math.floor(Math.random() * perguntasNivel2.length)];
    const acertou = await this.fazerPergunta(perguntaAleatoriaNivel2);

    rl.close();
  }

  async nivel3() {
    const perguntasNivel3 = [
      {
        "texto": "pergunta de viel 3 1",
        "opcoes": ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
        "respostaCorreta": "Brasília",
        "valor": 100000
      },
      {
        "texto": "pergunta de viel 3 2",
        "opcoes": ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
        "respostaCorreta": "Brasília",
        "valor": 100000
      },
      {
        "texto": "pergunta de viel 3 3",
        "opcoes": ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
        "respostaCorreta": "Brasília",
        "valor": 100000
      }
    ];

    const perguntaAleatoriaNivel3 = perguntasNivel3[Math.floor(Math.random() * perguntasNivel3.length)];
    const acertou = await this.fazerPergunta(perguntaAleatoriaNivel3);

    rl.close();
  }

  async nivel4() {
    const perguntasNivel4 = [
      {
        "texto": "pergunta de viel 4 1",
        "opcoes": ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
        "respostaCorreta": "Brasília",
        "valor": 200000
      },
      {
        "texto": "pergunta de viel 4 2",
        "opcoes": ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
        "respostaCorreta": "Brasília",
        "valor": 200000
      },
      {
        "texto": "pergunta de viel 4 3",
        "opcoes": ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
        "respostaCorreta": "Brasília",
        "valor": 200000
      }
    ];

    const perguntaAleatoriaNivel4 = perguntasNivel4[Math.floor(Math.random() * perguntasNivel4.length)];
    const acertou = await this.fazerPergunta(perguntaAleatoriaNivel4);

    rl.close();
  }

  async nivel5() {
    const perguntasNivel5 = [
      {
        "texto": "pergunta de viel 5 1",
        "opcoes": ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
        "respostaCorreta": "Brasília",
        "valor": 1000000
      },
      {
        "texto": "pergunta de viel 5 2",
        "opcoes": ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
        "respostaCorreta": "Brasília",
        "valor": 1000000
      },
      {
        "texto": "pergunta de viel 5 3",
        "opcoes": ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
        "respostaCorreta": "Brasília",
        "valor": 1000000
      }
    ];

    const perguntaAleatoriaNivel5 = perguntasNivel5[Math.floor(Math.random() * perguntasNivel5.length)];
    const acertou = await this.fazerPergunta(perguntaAleatoriaNivel5);

    rl.close();
  }
}

const jogo = new Jogo();
console.clear();
jogo.nivel1();

