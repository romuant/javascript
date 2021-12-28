 const valores = [12,34,5,6,6,6,6,6,45,45]
 console.log('numeros originais - '+valores)
const numerosSemRepeticao = [...new Set(valores)]
console.log('numeros sem repetição - '+numerosSemRepeticao)
numerosSemRepeticao.sort((a,b)=>a-b)
console.log("ordenados - "+numerosSemRepeticao)
numerosSemRepeticao.pop()
console.log("sem o ùltimo numero - "+numerosSemRepeticao)
numerosSemRepeticao.reverse()
console.log("invertidos - "+numerosSemRepeticao)
numerosSemRepeticao.shift()
console.log("Sem o primeiro - "+numerosSemRepeticao)
numerosSemRepeticao.unshift(34)
console.log("com o primeiro de volta - "+numerosSemRepeticao)
numerosSemRepeticao.push(567,89000,-500,22627)
console.log("mais numeros adicionados no final -   "+numerosSemRepeticao)
numerosSemRepeticao.sort((a,b)=>a-b)
console.log("Ordenados novamente - "+numerosSemRepeticao)
numerosSemRepeticaoSoOsPares= numerosSemRepeticao.filter(numerosSemRepeticao=>numerosSemRepeticao%2===0)
console.log("so os pares - "+numerosSemRepeticaoSoOsPares)
numerosSemRepeticaoSoOsPares= numerosSemRepeticao.filter(numerosSemRepeticao=>numerosSemRepeticao%2!==0)
console.log("so os ímpares - "+numerosSemRepeticaoSoOsPares)
