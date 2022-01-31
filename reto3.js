pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho') // true
pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!') // true

pangram('Esto es una frase larga pero no tiene todas las letras del abecedario') // false
pangram('De la a a la z, nos faltan letras') // false


export default function pangram(letter) {
    return new Set(letter.match(/[a-zñáéíóúü]/gi)).size >= 27;
   }
   
   
   console.log(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')) // true
   
   console.log(pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibe!')) // true
   
   console.log(pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')) // false
   console.log(pangram('De la a a la z, nos faltan letras')) // false
   
    