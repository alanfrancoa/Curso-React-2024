
describe('Pruebas en <DemoComponent />', () => { 
    //con describe, se pueden agrupar distintas pruebas.

    test('Esta prueba no deberia fallar', () => {
        //1. Inicializacion 
        const message1 = 'Hola Mundo';
        // al hacer que tenga los espacios, no son iguales.
        //2. Estimulo
        const message2 = message1.trim();
    
        //3. Aserciones
        
        expect(message1).toBe(message2);
        //En Jest, podemos evaluar igualdades de esta manera. 
    
    })
 })
