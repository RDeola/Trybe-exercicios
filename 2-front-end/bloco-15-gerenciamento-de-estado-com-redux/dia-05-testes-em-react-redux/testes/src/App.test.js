// src/App.test.js
import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(combineReducers({ clickReducer }), initialState),
  } = {},
) => ({
  ...render(<Provider store={ store }>{component}</Provider>),
  store});

  describe('testing clicks', () => {
    beforeEach(cleanup);
    test('the page should have a button and a text 0', () => {
      renderWithRedux(<App />);
      const buttonAdicionar = screen.queryByText('Clique aqui');
  
      expect(buttonAdicionar).toBeInTheDocument();
      expect(screen.getByText('0')).toBeInTheDocument();
    });

    // Utilizaremos o seletor `getByText` para retornar o nó correspondente a uma consulta de texto
    test('a click in a button should increment the value of clicks', () => {
      renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 } } });

      expect(screen.getByText('5')).toBeInTheDocument();
    });

    test('a click in the button should really increment the counter', () => {
      renderWithRedux(<App />);
      const buttonAdicionar = screen.queryByText('Clique aqui');
  
      expect(buttonAdicionar).toBeInTheDocument();
      userEvent.click(buttonAdicionar)
      expect(screen.getByText('1')).toBeInTheDocument();
    });

    test('a click in the button should increment counter to 11 starting in 10', () => {
      renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 } } });
      const buttonAdicionar = screen.queryByText('Clique aqui');
  
      expect(buttonAdicionar).toBeInTheDocument();
      userEvent.click(buttonAdicionar)
      expect(screen.getByText('11')).toBeInTheDocument();
    });
  });
