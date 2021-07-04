import { Accordion } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Repository, User } from '../../clients/types';
import { State } from '../../store/types';
import RepositoryItem from './RepositoryItem';
import UserItem from './UserItem';

function Listing(): ReactElement | null {
  const users = useSelector((state: State) => state.users);
  const repositories = useSelector((state: State) => state.repositories);

  if (users.length === 0) {
    return null;
  }

  return (
    <Accordion allowMultiple>
      {users.map((user: User) => (
        <UserItem key={user.id} user={user}>
          {repositories
            .filter((repository: Repository) => repository.owner.id === user.id)
            .map((repository: Repository) => (
              <RepositoryItem key={repository.id} repository={repository} />
            ))}
        </UserItem>
      ))}
    </Accordion>
  );
}

export default Listing;
