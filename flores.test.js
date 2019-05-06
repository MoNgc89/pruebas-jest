const flores = require('./flores.js')

test('contiene el array orquideas?', () =>{
  expect (flores).toContain('orquidea')
})

test('cuantos elementos hay?', () =>{
  expect (flores).toHaveLength(4)
})
