class Atleta{
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }
    calculaCategoria(){
        if(this.idade >= 9 && this.idade <=11){
            console.log("Categoria: Infantil")
        }else if(this.idade >= 12 && this.idade <=13){
            console.log("Categoria: Juvenil")
        }else if(this.idade >=14 && this.idade <=15){
            console.log('Categoria: Intermediário')
        }else if(this.idade >= 16 && this.idade <=30){
            console.log("Categoria: Adulto")
        }else{
            console.log("Sem categoria")
        }
    }
    calculaIMC(){
        console.log(`IMC: ${(this.peso / (this.altura ** 2)).toFixed(2)}`)
    }
    calculaMediaValida(){
        let notasOrdenadas = this.notas.sort((a, b) => a - b)
        let novasNotas = notasOrdenadas.slice(1, 4)
        let notasCalculadas = novasNotas.reduce((a, b) => a + b, 0)
        console.log(`Média: ${(notasCalculadas / novasNotas.length).toFixed(2)}`)
    }
    obtemNomeAtleta(){
        return console.log(`Nome: ${this.nome}`)
    }
    obtemIdadeAtleta(){
        return console.log(`Idade: ${this.idade}`)
    }
    obtemPesoAtleta(){
        return console.log(`Peso: ${(this.peso).toFixed(2)} Kg`)
    }
    obtemNotasAtleta(){
        return `Notas: ${this.notas}`
    }
    obtemCategoria(){
        return this.calculaCategoria()
    }
    obtemIMC(){
        return this.calculaIMC()
    }
    obtemMediaValida(){
        return this.calculaMediaValida()
    }
}

let neymar = new Atleta("Neymar", 18, 62.5, 1.70, [5, 10, 8, 3.5, 10])

neymar.obtemNomeAtleta()
neymar.obtemIdadeAtleta()
neymar.obtemPesoAtleta()
console.log(`Altura: ${(neymar.altura).toFixed(2)} cm`)
neymar.obtemNotasAtleta()
neymar.obtemCategoria()
neymar.obtemIMC()
neymar.obtemMediaValida()