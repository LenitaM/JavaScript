
alert('Vamos ver quais números são posistvos e negativos entre 10 números')

const nums =[]

for (i = 1; i <= 10; i++) {
    const n = parseInt(prompt(`Digite o ${i}º número`))
    nums.push(n) 
}
const negativos = []
const positivos = []


for (let numero of nums) {
    
    if (numero + numero > 0) { 
            positivos.push(numero)
        }
        else if  (numero + numero < 0){
            negativos.push(numero)
        }    
        }
        alert(`Os números positivos são ${positivos.join(',')}`)
        alert(`Os números negativos são ${negativos.join(',')}`)





