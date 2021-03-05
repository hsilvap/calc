import { render, screen } from '@testing-library/react';
import { StoreContext } from '../../context/store';
import Layout from './Layout';

function renderLayout(state, dispatch) {
    return render(
        <StoreContext.Provider value={{ state, dispatch }}>
            <Layout />
        </StoreContext.Provider>
    );
}
beforeEach(() => {
    renderLayout({}, {})
});

test('renders application', () => {
    const layout = screen.getByTestId('layout');
    const layoutButtons = screen.getByTestId('buttons-layout');
    const layoutInput = screen.getByTestId('input-layout');
    expect(layout).toBeInTheDocument();
    expect(layoutButtons).toBeInTheDocument();
    expect(layoutInput).toBeInTheDocument();
});

test('renders all buttons', () => {
    const items = screen.getAllByRole('button')
    expect(items).toHaveLength(19);
});

test('renders initial input', () => {
    const input = screen.getByTestId('calculator-input')
    expect(input).toContainHTML('0')
});
