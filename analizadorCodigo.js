function analizarCodigo(codigo) {
  // Dividir el código en palabras clave y símbolos
  const separadores = [' ', '=', ';', ',', "'", '"', '(', ')', '[', ']'];
  let palabraActual = '';
  const tokens = [];

  for (let i = 0; i < codigo.length; i++) {
    const caracter = codigo[i];

    if (separadores.includes(caracter)) {
      // Si encontramos un separador, procesamos la palabra actual
      if (palabraActual.length > 0) {
        tokens.push(palabraActual);
        palabraActual = '';
      }

      // Si el separador no es un espacio, también lo agregamos como token
      if (caracter !== ' ') {
        tokens.push(caracter);
      }
    } else {
      // Si el caracter no es un separador, lo agregamos a la palabra actual
      palabraActual += caracter;
    }
  }

  // Procesar la última palabra si hay alguna
  if (palabraActual.length > 0) {
    tokens.push(palabraActual);
  }

  // Definir las categorías de tokens
  const categorias = {
  'var': 'Declaración de variables',
  'let': 'Declaración de variables',
  'const': 'Declaración de variables',
  'if': 'Condición',
  'else': 'Condición',
  'while': 'Bucle while',
  'switch': 'palabra reservada decisiones',
  'break': 'palabra reservada para salir de bucle',
  'do': 'bucle do',
  'for in': 'bucle for in',
  'for of': 'bucle for of',
  'for': 'Bucle for',
  'function': 'Declaración de función',
  'true': 'tipo de dato booleano',
  'false': 'tipo de dato booleano',
  'abstract': 'declaracion de metodo abstracto',
  'private':'declaracion de metodo private',
  'protected': 'declaracion de metodo proteegido',
  'public': 'declaracion de metodo publico',
  'static': 'declaracion de metodo estatico',
  'number': 'tipo de dato numerico',
  'bigInt': 'tipo de dato numerco',
  'class': 'palabra reservada para declaracion de clases',
  'import': 'palabra reservada para importar clases',
  'extends': 'palabra reserada para declaracion de subclases',
  'super': 'palabra reservada para declaracion de superclases',
  'array': 'palabra reservada para declaracion de objetos',
  '=': 'Asignación de valor',
  "'": 'comilla simple',
  '+': 'Operador de suma',
  '-': 'Operador de resta',
  '*': 'Operador de multiplicación',
  '/': 'Operador de división',
  '%': 'Operador de módulo',
  '&&': 'operadoor loogico and',
  '!': 'operador logico not',
  '==': 'Operador de igualdad',
  '===': 'Operador de igualdad estricta',
  '+=': 'Operador de asignación de suma',
  '-=': 'Operador de asignación de resta',
  '*=': 'Operador de asignación de multiplicación',
  '/=': 'Operador de asignación de división',
  '%=': 'Operador de asignación de modulo',
  '!=': 'Operador de desigualdad',
  '!==': 'Operador de desigualdad estricta',
  '**': 'Operador de asignación de exponenciación',
  '||': 'Operador de asignación de or',
  '>': 'Operador mayor que',
  '<': 'Operador menor que',
  '>=': 'Operador mayor o igual que',
  '<=': 'Operador menor o igual que',
  '(': 'Paréntesis de apertura',
  ')': 'Paréntesis de cierre',
  '{': 'Llave de apertura',
  '}': 'Llave de cierre',
  '[': 'Corchete de apertura',
  ']': 'Corchete de cierre',
  ';': 'Punto y coma fin de línea',
  ',': 'Coma separadora'
  };

  // Analizar y mostrar las categorías de los tokens
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    const categoria = categorias[token] || 'Variable';

    // Verificar si es una asignación de valor
    if (categoria === 'Asignación de valor') {
      const siguienteToken = tokens[i + 1];
      let tipoValor;

      if (siguienteToken.startsWith("'") || siguienteToken.startsWith('"')) {
        tipoValor = 'string';
      } else if (!isNaN(siguienteToken)) {
        tipoValor = Number.isInteger(parseFloat(siguienteToken)) ? 'entero' : 'double';
      } else {
        tipoValor = 'desconocido';
      }
      
      if (tipoValor == 'string'){
          const categoriaSiguientetoken = categorias[siguienteToken];
          const valorVariable = tokens[i + 2];

          console.log(`${siguienteToken} --> ${categoriaSiguientetoken}`);
          console.log(`${valorVariable} --> ${tipoValor}`);
      }else{
          console.log(`${token} --> ${categoria}`);
          console.log(`${siguienteToken} --> Valor de variable tipo ${tipoValor}`);
      }

      
      
      // Saltar el siguiente token, ya que ya lo hemos procesado
      i += 2;
    } else {
      console.log(`${token} --> ${categoria}`);
    }
  }
}

// Ejemplo de uso
const codigo = "var edad = 20;";
analizarCodigo(codigo);