import {
  Button,
  Input,
  Text,
} from '@chakra-ui/react';
import {
  FormEvent, ReactElement, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersAndRepositories, setInitialState } from '../../store/actions';
import { State } from '../../store/types';

function SearchForm(): ReactElement {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const users = useSelector((state: State) => state.users);

  const dispatch = useDispatch();

  async function onSearchFormSubmit(event: FormEvent) {
    event.preventDefault();

    if (!username) {
      return;
    }

    setMessage('');
    setLoading(true);

    if (users.length > 0) {
      dispatch(setInitialState());
    }

    try {
      await dispatch(fetchUsersAndRepositories(username));

      setMessage(`Showing users for "${username}"`);
    } catch (err) {
      console.error(err);

      setMessage('Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <form onSubmit={onSearchFormSubmit}>
        <Input value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Enter username" mb={2} />
        <Button type="submit" disabled={loading} isLoading={loading} isFullWidth colorScheme="blue">Search</Button>
      </form>

      {message && (
        <Text as="p" fontSize="sm" py={3}>{message}</Text>
      )}
    </>
  );
}

export default SearchForm;
