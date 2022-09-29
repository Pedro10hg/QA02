const test = require('tape')
const index = require('./index')

test('Teste 1.1', (t) => {
    t.assert(index.verificarmaioidade(19) === "sim",
    "correto")
    t.end()
})

test('Teste 1.2', (t) => {
    t.assert(index.verificarmaioidade(18) === "sim",
    "correto")
    t.end()
})

test('Teste 1.3', (t) => {
    t.assert(index.verificarmaioidade(15) === "nao",
    "correto")
    t.end()
})

test('Teste 2.1', (t) => {
    t.assert(index.verificardia(28) === "dia atual", 
    "correto")
    t.end()
})

test('Teste 2.2', (t) => {
    t.assert(index.verificardia(3) === "dia nao atual", 
    "correto")
    t.end()
})

test('Teste 2.3', (t) => {
    t.assert(index.verificardia(29) === "dia nao atual", 
    "correto")
    t.end()
})

test('Teste 3.1', (t) => {
    t.assert(index.reprovado(6,8,6,8) === "aprovado", 
    "correto")
    t.end()
})

test('Teste 3.2', (t) => {
    t.assert(index.reprovado(7,7,7,7) === "aprovado", 
    "correto")
    t.end()
})

test('Teste 3.3', (t) => {
    t.assert(index.reprovado(10,10,2,0) === "reprovado", 
    "correto")
    t.end()
})
