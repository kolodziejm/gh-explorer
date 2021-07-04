import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import SearchForm from './index';

const renderForm = () => render(
  <Provider store={store}>
    <SearchForm />
  </Provider>,
);

describe('SearchForm', () => {
  it('doesn\'t render message initially', () => {
    const { queryByText } = renderForm();
    const messageEl = queryByText(/users/i);

    expect(messageEl).toBeNull();
  });

  it('doesn\'t search for an empty input', () => {
    const { getByText, queryByText } = renderForm();

    const BUTTON_REG_EXP = /search/i;

    const searchButton = getByText(BUTTON_REG_EXP);

    fireEvent.click(searchButton);

    expect(queryByText(BUTTON_REG_EXP)).toBeTruthy();
  });

  it('searches for a given input', async () => {
    const { getByPlaceholderText, getByText } = renderForm();

    const searchInput = getByPlaceholderText(/username/i);
    const searchButton = getByText(/search/i);

    fireEvent.change(searchInput, { target: { value: 'test' } });
    fireEvent.click(searchButton);

    const message = await waitFor(() => getByText(/users/i));
    expect(message).toBeInTheDocument();
  });
});
