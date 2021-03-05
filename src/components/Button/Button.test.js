import { render, screen } from '@testing-library/react';
import { StoreContext } from '../../context/store';
import Button from './Button';

function renderBtn(state, dispatch) {
    return render(
        <StoreContext.Provider value={{ state, dispatch }}>
            <Button value="+" />
        </StoreContext.Provider>
    );
}
beforeEach(() => {
    renderBtn({}, {})
});

test('renders button', () => {
    expect(screen.getByRole('button')).toBeInTheDocument()
});

test('button has value', () => {
    expect(screen.getByRole('button')).toHaveTextContent('+')
});

