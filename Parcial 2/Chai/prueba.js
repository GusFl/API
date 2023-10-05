const chai = require('chai');
chai.should();

describe('Ejemplo de estilo "should" en Chai', () => {
  it('debería verificar si un número es igual a 5', () => {
    const numero = 5;
    numero.should.equal(5); // Debería ser igual a 5
  });

  it('debería verificar si una cadena contiene la subcadena "chai"', () => {
    const cadena = 'Chai es genial';
    cadena.should.include('chai'); // Debería incluir la palabra "chai"
  });
});



const chai = require('chai');
const expect = chai.expect;

describe('Ejemplo de estilo "expect" en Chai', () => {
  it('debería verificar si un número es igual a 5', () => {
    const numero = 5;
    expect(numero).to.equal(5); // Debería ser igual a 5
  });

  it('debería verificar si una cadena contiene la subcadena "chai"', () => {
    const cadena = 'Chai es genial';
    expect(cadena).to.include('chai'); // Debería incluir la palabra "chai"
  });
});
