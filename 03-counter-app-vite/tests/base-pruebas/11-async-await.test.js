import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Prueba en 11-async-await.js', () => {

    test('getImagen debe retornar una URL de img', async() => {
        const resp = await getImagen();
        console.log(resp);

        expect(resp).toBe('No se encontro la imagen');
    });
});