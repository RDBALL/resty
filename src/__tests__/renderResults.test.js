import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from '../app'

const server = setupServer(
  rest.get('*', (req, res, ctx) => {
    return res(ctx.json({
      headers: {contentType: 'application/json'},
      data: {results: ['test']},
    }));
  }),
)

beforeAll(() => server.listen())

afterAll(() => server.close())

describe('App component integration', () => {
  it('captures user url input', async () => {
    render(<App />);

    let getSpan = screen.getByText('GET');
    let urlInput = screen.getByTestId('form-url');
    fireEvent.click(getSpan);
    fireEvent.change(urlInput, {target: {value: 'https://swapi.dev/api/people/1'}})
    
    let button = screen.getByText('GO!');
    fireEvent.click(button);

    let urlInputResult = await screen.findByText('URL: https://swapi.dev/api/people/1');
    expect(urlInputResult).toBeInTheDocument();
  })
  
  it('checking awaiting API request begins as Awaiting API Request', async () => {
    render(<App />);
    
    let getSpan = screen.getByText('GET');
    let urlInput = screen.getByTestId('form-url');
    fireEvent.click(getSpan);
    fireEvent.change(urlInput, {target: {value: 'https://swapi.dev/api/people/1'}})
    
    let button = screen.getByText('GO!');
    fireEvent.click(button);
    
    let jsonResult = screen.getByTestId('returnResults');
    expect(jsonResult).toHaveTextContent('Awaiting API Request');
  })
  
  it('checking awaiting API request swaps to Results', async () => {
    render(<App />);

    let getSpan = screen.getByText('GET');
    let urlInput = screen.getByTestId('form-url');
    fireEvent.click(getSpan);
    fireEvent.change(urlInput, {target: {value: 'https://swapi.dev/api/people/1'}})
    
    let button = screen.getByText('GO!');
    fireEvent.click(button);

    let requestMethodResult = await screen.findByText('Results');
    expect(requestMethodResult).toBeInTheDocument();
  })
})