import { Container } from '@chakra-ui/react';
import { ReactElement } from 'react';
import SearchForm from './components/SearchForm';
import Listing from './components/Listing';

function App(): ReactElement {
  return (
    <Container py={3}>
      <SearchForm />
      <Listing />
    </Container>
  );
}

export default App;
