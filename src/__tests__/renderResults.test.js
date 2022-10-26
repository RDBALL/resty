import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

import App from '../app'

describe('Testing form submission results', () => {
  it('Ensuring that data is rendered when the "go" button is pressed on the form', () => {
    render(<App />);
    let formSubmitButton = screen.getByTestId('formSubmitButton');
    fireEvent.click(formSubmitButton);
    let returnResults = screen.getByTestId('returnResults');

    expect(returnResults).toHaveTextContent(/.*/);
  });
})
