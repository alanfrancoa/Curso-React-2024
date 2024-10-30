import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Test de 08-imp-exp.js', () => {

    test('Get heroe by debe retornar un heroe por ID', () => {

        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
    })

    test('Get heroes by debe retornar undefined, si no existe el ID', () => {

        const id = 100;
        const hero = getHeroeById(id);
        console.log(hero)

        //expect(hero).toBe( undefined ) se puede poner asi ya que sabemos que retorna un undefined y este es un dato primitivo.
        expect(hero).toBeFalsy();
    })

    //TAREA: HACER CASOS DE TEST EN GET HERO BY OWNER

    test('getHeroesByOwner, debe retornar un array con los heroes de DC', () => {

        const owner = 'DC';
        const listaHeroes = getHeroesByOwner(owner);

        //El array debe tener un largo de 3
        expect(listaHeroes.length).toBe(3);

        //El array debe tener el siguiente contenido:
        expect(listaHeroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ])

        //tambien podria evaluarlo, probando la sintaxis de la funcion. 
        expect(listaHeroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
    })

    test('getHeroByOwner, debe retornar un array con los heroes de Marvel', () => {

        const owner = 'Marvel';
        const listaHeroes = getHeroesByOwner(owner);

        console.log(listaHeroes)
        //El array debe tener un largo de 2
        expect(listaHeroes.length).toBe(2);

        //El array debe tener el siguiente contenido:
        expect(listaHeroes).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ])
    })
})