import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { datatype, internet, lorem } from 'faker';
import { Provider } from 'react-redux';
import { Repository } from '../../../clients/types';
import store from '../../../store';
import RepositoryItem from './index';

const createRepository = (hasDescription = true) => ({
  description: hasDescription ? lorem.words() : '',
  id: datatype.number(),
  name: lorem.word(),
  stargazers_count: datatype.number(),
  owner: {
    id: datatype.number(),
    login: internet.userName(),
  },
});

const renderItem = (repository: Repository) => render(
  <Provider store={store}>
    <RepositoryItem repository={repository} />
  </Provider>,
);

describe('RepositoryItem', () => {
  it('renders description text element when repository has a description', () => {
    const repositoryWithDescription = createRepository();

    const { getByTestId } = renderItem(repositoryWithDescription);

    const descriptionEl = getByTestId(/description/i);

    expect(descriptionEl).toBeInTheDocument();
  });

  it('doesn\'t render description text element when repository has no description', () => {
    const repositoryWithDescription = createRepository(false);

    const { queryByTestId } = renderItem(repositoryWithDescription);

    const descriptionEl = queryByTestId(/description/i);

    expect(descriptionEl).toBeNull();
  });
});
