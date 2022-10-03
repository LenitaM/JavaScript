/** ATIVIDADE
 * Criem um função que gere o resultado de uma equação de segundo grau:
 * ax² + bx + c = 0
 * delta = b² - 4ac 
 * b = -b +- raiz de delta /2
 * 
 */

 function equacaoSegundoGrau (a, b, c) {
    const delta = b ** 2 - 4 * a * b * c
    /**
     * Math é um objeto do JavaScript que possuí métodos para fazer uma operação matemáticos mais complexos
     */
    const raizDelta = Math.sqrt(delta)
    const x1 = (-b + raizDelta) / (2 * a)
    const x2 = (-b - raizDelta) / (2 * a)

    return [x1, x2] //colchetes indica os arrays
   
 }
 console.log(equacaoSegundoGrau(1, -1, -12)) // [-3, 4]

