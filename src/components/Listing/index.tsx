import { Accordion } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { User } from '../../clients/types';
import { State } from '../../store/types';
import UserItem from './UserItem';

function Listing(): ReactElement | null {
  const users = useSelector((state: State) => state.users);

  if (users.length === 0) {
    return null;
  }

  return (
    <Accordion allowMultiple>
      {users.map((user: User) => (
        <UserItem key={user.id} user={user} />
      ))}
    </Accordion>
  );
}

export default Listing;
