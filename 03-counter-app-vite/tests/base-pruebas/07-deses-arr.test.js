import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Pruebas de 07-deses-arr', () => { 
    test('Debe traer un array desestructurado', () => { 

        const [letters, numbers] = retornaArreglo();
        
        //podemos testear por valor
        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

        //tambien se puede por tipo
        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');


        //Se espera que letters sea un string cualquiera
        expect( letters ).toEqual( expect.any(String) );
        
     })
 })