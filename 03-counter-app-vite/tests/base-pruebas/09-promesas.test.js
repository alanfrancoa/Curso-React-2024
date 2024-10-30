import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Testeo de 09-promesas', () => {

    test('getHeroeByIdAsync debe retornar un heroe', (done) => {

        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {

                expect(hero).toEqual(
                    {
                        id: 1,
                        name: 'Batman',
                        owner: 'DC'
                    }
                );

                done();
                //Si no se llama, jest se queda esperandolo hasat 5000ms
            })
    })

    test('getHeroeByIdAsync debe obtener un error si el heroe no existe', (done) => {

        const id = 1300;

        //si bien evaluamos que nuestro caso va a salir por el catch, es importante evaluar la opcion que va a salir por el then.
        getHeroeByIdAsync(id)
            .then(hero => {
                expect( hero ).toBeFalsy();
            })
            .catch(err => {
                
                expect(err).toBe(`No se pudo encontrar el héroe ${id}`);

                done();
            })

    })
})