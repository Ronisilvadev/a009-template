
// console.log("teste")

// const nome = prompt("Qual seu nome?")
// const nomeMaiusculas = nome.toUpperCase()
// console.log(nomeMaiusculas)
// const  cor = prompt("Qual sua cor favorita?")
// const citacao = prompt("Qual sua citaçao favorita?")


// //const stringConcatenada = "a cor favorita de " + nome + " é " + cor 
// const stringConcatenada = "a cor favorita de " + nome + " é " + cor + "e sua citaçao é:\"" + citacao + "\""

// console.log("string contatenada",stringConcatenada)

// //const templateString = `A cor favorita de ${nome} é ${cor}`
// const templateString = `nome: ${nome} \ncor favorita ${cor}`
// console.log("template String", templateString)



// const tamanho = nome.length
// console.log("o seu nome tem", tamanho , "caracteres!")

// const temA = nomeMaiusculas.includes('A')
// console.log('Seu nome tem a letra A?', temA)

// const temA2 = nome.toUpperCase().includes('A')
// console.log(temA2)


const emailDoUsuario = prompt('digite seu Email?').toLocaleUpperCase()
const nomeDoUsuario = prompt('Digite seu Usuario').toLocaleUpperCase() // deixar maiusculo

// console.log(`O ${emailDoUsuario} foi cadastrado com sucesso, Boas vindas ${nomeDoUsuario}`)


const frase1 = (`O ${emailDoUsuario} foi cadastrado com sucesso, \nBoas vindas ${nomeDoUsuario} \nSeu nome tem ${nomeDoUsuario.length} Letras`) // email cadastrado, nome do usuario e dizendo quantas letras tem seu nome


console.log(frase1.replaceAll(`r`,`l`))  // mudando letras R pela L

console.log(emailDoUsuario.includes('@'))// verificando se seu email tem @



