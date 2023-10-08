class PersonagemAnime {
    constructor(nome, poder, habilidade, life) {
      this.nome = nome;
      this.poder = poder;
      this.habilidade = habilidade;
      this.life = life; // Adicionando o atributo "life"
      this.vivo = true;
    }
  
    atacar(outroPersonagem) {
      console.log(`${this.nome} ataca ${outroPersonagem.nome} com ${this.habilidade}`);
      outroPersonagem.sofrerDano(this.poder);
    }
    sofrerDano(dano) {
      console.log(`${this.nome} sofre ${dano} de dano`);
      this.life -= dano; // Reduz a vida com base no dano recebido
      if (this.life <= 0) {
        this.vivo = false;
        console.log(`${this.nome} foi derrotado`);
      }
    }
  }
  // Criando objetos (instanciando) com base na classe
  let goku = new PersonagemAnime("Goku", 800, "KAMEHAMEHA", 3500);
  let vegeta = new PersonagemAnime("Vegeta", 770, "FINAL FLASH", 3240);
  
  // Combate até um dos personagens ser derrotado
  while (goku.vivo && vegeta.vivo) {
  
    goku.atacar(vegeta);
    if (vegeta.life > 0) {
      console.log(` == ${vegeta.nome}: ${vegeta.life} de vida == `);
      console.log(' ');
  
    } else {
      console.log(`${goku.nome} venceu!`);
      break;
  
    }
    vegeta.atacar(goku);
    if (goku.life > 0) {
      console.log(` == ${goku.nome}: ${goku.life} de vida == `);
      console.log(' ');
    } else {
      console.log(`${vegeta.nome} venceu!`);
      break;
    }
  }
  
  