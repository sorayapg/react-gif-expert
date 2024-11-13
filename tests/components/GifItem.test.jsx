import { render, screen} from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en GifItem', () => {
    const title = 'Kirby';
    const url  = 'https://one-punch.com/kirby.jpg';

    test('debe de hacer match con el snapshot', () => {

        const { container } = render(<GifItem  title={title} url={url} id=''/>);
        expect( container ).toMatchSnapshot();
    });

    test('debe de monstrar la imagen con el url y el ALT indicado', () => {

        render(<GifItem  title={title} url={url} id=''/>);
        // screen.debug();
        // expect( screen.getByRole('img').src).toBe(url);
        // expect( screen.getByRole('img').alt).toBe(title);

        const {src, alt} = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );

        //console.log(screen.getByRole('img').alt);
    });

    test('debe de monstrar el titulo en el componente', () => {

        render(<GifItem  title={title} url={url} id=''/>);
        expect( screen.getByText( title ) ).toBeTruthy();

    });
});