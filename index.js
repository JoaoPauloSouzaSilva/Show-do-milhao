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
    console.clear();
    // nome do jogador

    console.log(`  `);
    console.log(`Seu Saldo: R$${this.saldo},00`);
    console.log(`  `);
    this.numrodada += 1;
    console.log(`Rodada ${this.numrodada}`);
    console.log('  ');
    console.log(`Responda com muito cuidado, Pois:`);
    console.log(`  `);
    console.log(`Se Errar: R$ 0,00  (Perde Tudo)`);
    console.log(`  `);
    console.log(`Se Parar: R$${this.saldo},00`);
    console.log(`  `);
    console.log(`Se Acertar: + R$${pergunta.valor}`);
    console.log(`  `);

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
      console.log(`Seu saldo era de: R$${this.saldo},00`);
      this.saldo += pergunta.valor;
      console.log(`Seu saldo agora é: R$${this.saldo},00`);
      console.log(`  `);
      this.proximonivel();
      return true;
    } else {
      console.log('Resposta incorreta. Você perdeu tudo!');
      console.log(`  `); 
      this.saldo = 0;
      console.log(`Seu saldo é: R$${this.saldo},00`);
      this.painelfinal();
      return false;
    }

  }

  async proximonivel() { // espaço
    console.log(`  `); 
    console.log(`---------------------------------------------------------`);
    console.log(`  `); 
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

        if (this.numrodada == 1) {
          this.nivel2();
        } else if (this.numrodada == 2) {
          this.nivel3();
        } else if (this.numrodada == 3) {
          this.nivel4();
        } else if (this.numrodada == 4) {
          this.nivel5();
        } else {
          this.painelfinal();
        }

        //guarda os nivei no vetor e toda vez que continuar ele passa pro 
          //proxima e o ultimo é o painel final

      } else {
        console.log(`  `);
        console.log('Entrada inválida. Por favor, digite 1 ou 2.');
        this.proximonivel(); // Chama a função novamente se a entrada for inválida
      }
      callback();
    });
    
  }

  async painelfinal (){
    // painel final
    console.clear();
    console.log(`Bem-Vindo ao Painel Final`);
    console.log(`  `); 
    // Jogador: nome do jogador
    console.log(`  `); 
    console.log(`Você alcançou o nível ${this.numrodada}/5`);
    console.log(`  `); 
    // resposta correta da ultma pergunta
    console.log(`  `); 
    console.log(`Sua premiação foi de: R$${this.saldo},00`);
    console.log(`  `); 

    console.log(`  `); 
    console.log(`---------------------------------------------------------`);
    console.log(`  `); 
    console.log('Deseja jogar novamente? ');
    console.log('[ 1 ] Sim.');
    console.log('[ 2 ] Não.');
    rl.question('(digite o número)', (valor) => {
      let finalizar = valor;

      if (finalizar.trim() === '1') {
        console.log(`  `);
        console.log('Você escolheu jogar novamente.');
        this.saldo = 0;
        this.numrodada = 0;
        this.nivel1();


      } else if (finalizar.trim() === '2') {
        console.log(`  `);
        console.log('Você escolheu parar de jogar.');
        rl.close();
        process.exit();


      } else {
        console.log(`  `);
        console.log('Entrada inválida. Por favor, digite 1 ou 2.');
        this.painelfinal(); // Chama a função novamente se a entrada for inválida
      }
      callback();
    });

  }

  async nivel1() {
    const perguntasNivel1 = [
      {
        "texto": "Qual é o maior animal terrestre?",
        "opcoes": ["Girafa", " Elefante-africano", "Urso-polar", "baleia-jubarte"],
        "respostaCorreta": " Elefante-africano",
        "valor": 60000
      },
      {
        "texto": "Qual é a capital do Brasil?",
        "opcoes": ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
        "respostaCorreta": "Brasília",
        "valor": 60000
      },
      {
        "texto": "Qual é o idioma oficial do Brasil?",
        "opcoes": ["Francês", "Inglês", "Espanhol", "Português"],
        "respostaCorreta": "Português",
        "valor": 60000
      }
    ];

    const perguntaAleatoriaNivel1 = perguntasNivel1[Math.floor(Math.random() * perguntasNivel1.length)];
    const acertou = await this.fazerPergunta(perguntaAleatoriaNivel1);

    rl.close();
  }

  async nivel2() {
    const perguntasNivel2 = [
      {
        "texto": "Quem é o autor de “A Divina Comédia”?",
        "opcoes": ["Dante Alighieri", "William Shakespeare", "Miguel de Cervantes", "Homero"],
        "respostaCorreta": "Dante Alighieri",
        "valor": 125000
      },
      {
        "texto": "Qual é o rio mais longo do mundo?",
        "opcoes": ["Rio Nilo", "Rio Amazonas", "Rio Yangtzé", "Rio Paraná"],
        "respostaCorreta": "Rio Amazonas",
        "valor": 125000
      },
      {
        "texto": "Qual é o elemento químico mais abundante no universo?",
        "opcoes": ["Oxigênio", "Carbono", "Hidrogênio", "Oganessônio"],
        "respostaCorreta": "Hidrogênio",
        "valor": 125000
      }
    ];

    const perguntaAleatoriaNivel2 = perguntasNivel2[Math.floor(Math.random() * perguntasNivel2.length)];
    const acertou = await this.fazerPergunta(perguntaAleatoriaNivel2);

    rl.close();
  }

  async nivel3() {
    const perguntasNivel3 = [
      {
        "texto": "Qual é o nome do processo pelo qual as plantas transformam luz solar em energia?",
        "opcoes": ["Respiração celular", "Fotossíntese", "Metabolismo", "Digestão"],
        "respostaCorreta": "Fotossíntese",
        "valor": 250000
      },
      {
        "texto": "Quem propôs as leis do movimento planetário?",
        "opcoes": ["Isaac Newton", "Galileu Galilei", "Johannes Kepler", " Albert Einstein"],
        "respostaCorreta": "Johannes Kepler",
        "valor": 250000
      },
      {
        "texto": "Qual é o valor de pi (π) até a quinta casa decimal?",
        "opcoes": ["3.14158", "3.14159", "3.14169", "3.14168"],
        "respostaCorreta": "3.14159",
        "valor": 250000
      }
    ];

    const perguntaAleatoriaNivel3 = perguntasNivel3[Math.floor(Math.random() * perguntasNivel3.length)];
    const acertou = await this.fazerPergunta(perguntaAleatoriaNivel3);

    rl.close();
  }

  async nivel4() {
    const perguntasNivel4 = [
      {
        "texto": "Qual é a teoria que descreve a força fundamental da gravidade no universo moderno?",
        "opcoes": [" Teoria da Relatividade Especial", "Teoria da Relatividade Geral", "Mecânica Quântica", "Teoria Eletromagnética"],
        "respostaCorreta": "Teoria da Relatividade Geral",
        "valor": 500000
      },
      {
        "texto": "Quem foi o primeiro presidente do Brasil?",
        "opcoes": ["Getúlio Vargas", "Juscelino Kubitschek", "Marechal Deodoro da Fonseca", "Prudente de Morais"],
        "respostaCorreta": "Marechal Deodoro da Fonseca",
        "valor": 500000
      },
      {
        "texto": "Qual é a sequência correta do código genético que traduz para o aminoácido metionina?",
        "opcoes": ["UUU", "AUG", "GGG", "CCC"],
        "respostaCorreta": "AUG",
        "valor": 500000
      }
    ];

    const perguntaAleatoriaNivel4 = perguntasNivel4[Math.floor(Math.random() * perguntasNivel4.length)];
    const acertou = await this.fazerPergunta(perguntaAleatoriaNivel4);

    rl.close();
  }

  async nivel5() {
    const perguntasNivel5 = [
      {
        "texto": "Qual é a conjectura que afirma que todo número par maior que 2 pode ser expresso como a soma de dois números primos?",
        "opcoes": ["Conjectura de Goldbach", "Hipótese de Riemann", "Conjectura de Goldbach", "Último Teorema de Fermat"],
        "respostaCorreta": "Conjectura de Goldbach",
        "valor": 1000000
      },
      {
        "texto": "O que o Paradoxo dos Gêmeos demonstra sobre a percepção do tempo em diferentes sistemas de referência?",
        "opcoes": ["Que o tempo é absoluto e independente do observador", "Que o tempo pode ser revertido", "Que o tempo é uma ilusão e não existe", "Que o tempo é relativo e pode dilatar dependendo da velocidade do observador"],
        "respostaCorreta": "Que o tempo é relativo e pode dilatar dependendo da velocidade do observador",
        "valor": 1000000
      },
      {
        "texto": "Qual é o nome do paradoxo que envolve um gato e a mecânica quântica?",
        "opcoes": ["Paradoxo de Fermi", "Paradoxo de Schrödinger", "Paradoxo de Hawking", "Paradoxo de Einstein"],
        "respostaCorreta": "Paradoxo de Schrödinger",
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

