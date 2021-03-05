import { render, screen } from '@testing-library/react';
import { StoreContext } from '../../context/store';
import Input from './Input';

function renderInput(state, dispatch) {
    return render(
        <StoreContext.Provider value={{ state, dispatch }}>
            <Input />
        </StoreContext.Provider>
    );
}
beforeEach(() => {
    renderInput({}, {})
});

test('renders the input', () => {
    expect(screen.getByTestId('calculator-input')).toBeInTheDocument()
});

test('input does not display NaN', () => {
    expect(screen.getByTestId('calculator-input')).toHaveTextContent('')
});

