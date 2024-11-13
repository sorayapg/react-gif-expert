import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";


describe('Pruebas en <GifExpertApp />', () => {
    
    test('debe contener al menos una categoria ', () => {
        render(<GifExpertApp />);
        
        // Verificamos que se muestre la categoría inicial en el documento.
        expect(screen.getByText('One Punch'));

        // Muestra el contenido renderizado en consola para verificación
        screen.debug();
    });

    test('no debe agregar una categoría existente', () => {
        render(<GifExpertApp />);
        
        // Verificamos que la categoría inicial 'One Punch' está en el documento.
        expect(screen.getByText('One Punch'));

        // Simulamos la entrada del usuario para agregar la categoría 'One Punch' de nuevo.
        const input = screen.getByRole('textbox'); // Asumiendo que es un input tipo texto.
        fireEvent.change(input, { target: { value: 'One Punch' } });
        fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' }); // Simulamos presionar Enter.

        // Verificamos que la categoría no se haya duplicado.
        const categories = screen.getAllByText('One Punch');
        expect(categories.length).toBe(1); // Debe haber solo una ocurrencia de 'One Punch'.
        
        screen.debug(); // Muestra el contenido renderizado en consola para verificación.
    });
})