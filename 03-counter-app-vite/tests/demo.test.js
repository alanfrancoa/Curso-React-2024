


test('Esta prueba no deberia fallar', () => {
    if (1 === 0){
        throw new Error('No se puede dividir por Cero');
    }
})