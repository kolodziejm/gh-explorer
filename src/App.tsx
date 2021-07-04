import { Container } from '@chakra-ui/react';
import { ReactElement } from 'react';
import Listing from './components/Listing';
import SearchForm from './components/SearchForm';

function App(): ReactElement {
  return (
    <Container py={3}>
      <SearchForm />
      <Listing />
    </Container>
  );
}

export default App;
